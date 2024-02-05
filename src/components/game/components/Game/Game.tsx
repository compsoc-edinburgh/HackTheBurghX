import { useEffect, useState, useCallback, FC } from 'react';
import { Stage, Container, Text } from '@pixi/react';
import { Ground, Clouds, Wrapper, Dino, Trees, GameOver, BtnRestart, Birds } from '../../components';
import { VIEW_PORT_WIDTH, VIEW_PORT_HEIGHT, HALF_VIEW_PORT_WIDTH } from '../../global/constants';
import { ComponentBuilderProps, PixiObject } from '../../global/interfaces';
import { AppContext } from '../../global/context';
import {
	setGameSpeedToSessionStorage,
	getGameSpeedFromSessionStorage,
	removeGameSpeedFromSessionStorage,
	setGameHighScoreToLocalStorage,
	getGameHighScoreToLocalStorage,
} from '../../global/utils';
import { GAME_SPEED } from '../../global/enums';
import { useStore } from '../../hooks';
import '/htbxlogo.png'

interface GameProps {
	restartGame: () => void;

}

export const Game: FC<GameProps> = ({ restartGame }) => {
	const [gameSpeed, setGameSpeed] = useState(0);
	const [dinoRef, setDinoRef] = useState<PixiObject | null>(null);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);
	const [highScore] = useState(getGameHighScoreToLocalStorage());

	const appStore = useStore();
	const { state: store, dispatch } = appStore;

	const cloudsBuilder = ({ key, xPos, update }: ComponentBuilderProps): JSX.Element => {
		return <Clouds key={key} xPos={xPos} update={update} />;
	};

	const treesBuilder = ({ key, xPos, update }: ComponentBuilderProps): JSX.Element => {
		return <Trees key={key} xPos={xPos} update={update} />;
	};
	const birdsBuilder = ({ key, xPos, update }: ComponentBuilderProps): JSX.Element => {
		return <Birds key={key} xPos={xPos} update={update} />;
	};

	const detectCollision = useCallback(
		(treeRef: PixiObject) => {
			if (treeRef && dinoRef) {
				const bounds1 = treeRef.getBounds();
				const bounds2 = dinoRef.getBounds();

				if (
					bounds1.x < bounds2.x + bounds2.width &&
					bounds1.x + bounds1.width > bounds2.x &&
					bounds1.y < bounds2.y + bounds2.height - 30 &&
					bounds1.y + bounds1.height - 30 > bounds2.y
				) {
					setGameSpeed(GAME_SPEED.DEFAULT);
					removeGameSpeedFromSessionStorage();
					setGameOver(true);
				}
			}
		},
		[dinoRef]
	);

	const handleKeyDown = (e: KeyboardEvent) => {
		const keyCode = e.code;
		if (keyCode === 'Space' || keyCode === 'ArrowUp') {
			if (!gameOver) {
				setGameSpeed(GAME_SPEED.START);
				setGameSpeedToSessionStorage(GAME_SPEED.START);
			} else {
				handleResetBtn();
			}
		}
	};

	const handleResetBtn = () => {
		document.removeEventListener('keydown', handleKeyDown);
		restartGame();
	};
	
	useEffect(() => {
		const gameSpeed = getGameSpeedFromSessionStorage();
		if (gameSpeed > GAME_SPEED.DEFAULT) {
			removeGameSpeedFromSessionStorage();
		}

		document.addEventListener('keydown', handleKeyDown);

		if (gameOver) {
			if (score > highScore) {
				setGameHighScoreToLocalStorage(score);
			}
		}
	}, [gameOver]);

	useEffect(() => {
		if (score > 0 && score % 200 === 0) {
			const newGameSpeed = gameSpeed + 1;
			setGameSpeed(newGameSpeed);
			setGameSpeedToSessionStorage(newGameSpeed);
		}
	}, [score]);

	useEffect(() => {
		
		let intervalID: number;

		if (gameSpeed > GAME_SPEED.DEFAULT && !gameOver) {
			intervalID = setInterval(() => {
				const newScore = score + 1;
				setScore(newScore);
			}, 100);
		}

		return () => {
			clearInterval(intervalID);
		};
	}, [gameSpeed, gameOver, score]);


	return (
		<Stage width={VIEW_PORT_WIDTH} height={VIEW_PORT_HEIGHT} options={{ antialias: true, background: '#f5ecdb' }}>
			<Container sortableChildren={true}>
				<AppContext.Provider
					value={{
						detectCollision,
						gameOver,
						store,
						dispatch,
					}}
				>
					{score >= 100 && (
						<Wrapper
							componentBuilder={birdsBuilder}
							total={2}
							width={HALF_VIEW_PORT_WIDTH}
							skipFirstElement={true}
						/>
					)}
					<Wrapper componentBuilder={cloudsBuilder} total={3} width={HALF_VIEW_PORT_WIDTH} />
					<Dino gameSpeed={gameSpeed} setRef={setDinoRef} />
					<Wrapper
						componentBuilder={treesBuilder}
						total={2}
						width={HALF_VIEW_PORT_WIDTH / 2}
						skipFirstElement={true}
					/>
					<Ground gameSpeed={gameSpeed} />
				</AppContext.Provider>
			</Container>
			<Container>
				{/* @ts-ignore */}
				<Text text={`Score: ${score}`} x={HALF_VIEW_PORT_WIDTH * .5} y={15} style={{
					fill: 0x5f3c27,
					fontFamily: 'AR One Sans',
					fontSize: 22
				}}/>
				{/* @ts-ignore */}
				<Text text={`High Score: ${highScore}`} x={HALF_VIEW_PORT_WIDTH * 1.33} y={15} style={{
					fill: 0x5f3c27,
					fontFamily: 'AR One Sans',
					fontSize: 22,
				}}/>
			</Container>
			<Container visible={gameOver}>
				<GameOver />
				<BtnRestart restartGame={handleResetBtn} />
			</Container>

		</Stage>
	);
};
