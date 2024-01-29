import React, { useState, useEffect} from 'react';
import './Home.scss';
import { Game } from '../../game/components';

const Home: React.FC = () => {

    const [shouldRestart, setShouldRestart] = useState(false);
    useEffect(() => {
		if (shouldRestart) {
			setShouldRestart(false);
		}
	}, [shouldRestart]);

    return (
        <div className='page w-full flex flex-col items-center'>
            <p>Hack the Burgh X</p>
            <p>2-3rd March | Edinburgh, The Nucleus Building</p>
            <div className='flex gap-2'>
                <a target='_blank' href="https://google.com">Register</a>
                <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdWyk7F_E9m90cxkAr1AhJ9-xx_D5_u86ioZg8q3mawX3ydRw/viewform">Volunteer</a>
            </div>

            {!shouldRestart && <Game restartGame={() => setShouldRestart(true)} />}
        </div>
    );
};

export default Home;
