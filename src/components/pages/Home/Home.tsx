import React, { useState, useEffect} from 'react';
import './Home.scss';
import { Game } from '../../game/components';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    return (
        <div className='countdown-timer'>
                        <div>{formatNumber(timeRemaining.days)}:{formatNumber(timeRemaining.hours)}:{formatNumber(timeRemaining.minutes)}:{formatNumber(timeRemaining.seconds)}</div>
        </div>
    );
};

const Home: React.FC = () => {

    const [shouldRestart, setShouldRestart] = useState(false);
    const targetDate = '2024-02-19T00:00:00'; // Set your target date

    useEffect(() => {
		if (shouldRestart) {
			setShouldRestart(false);
		}
	}, [shouldRestart]);

    return (
        <div className='page w-full flex flex-col items-center'>
            <div className='main-box'>
                <div className='inner-box'>
                    <h1>Registration Closes February 2 12:00pm</h1>
                    <CountdownTimer targetDate={targetDate} />
                    <a href='https://register.2024.hacktheburgh.com/' target='_blank' className='button'>
                        <h3>Register Now</h3>
                    </a>
                </div>
            </div>
            <div className ='logo'>
                <img src='../../../../public/Logo1.png' alt="Test" />
            </div>

            <div className ='game'>
                {!shouldRestart && <Game restartGame={() => setShouldRestart(true)} />}
            d</div>

            <div className = 'bottom-section'>
            <p>Hack the Burgh X</p>
            <p>2-3rd March | Edinburgh, The Nucleus Building</p>
            <div className='flex gap-2'>
                <a target='_blank' href="https://google.com">Register</a>
                <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdWyk7F_E9m90cxkAr1AhJ9-xx_D5_u86ioZg8q3mawX3ydRw/viewform">Volunteer</a>
            </div>
            </div>
        </div>
    );
};

export default Home;
