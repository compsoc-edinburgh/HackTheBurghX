import React, { useState, useEffect} from 'react';
import './Home.scss';
import { Game } from '../../game/components';
import Footer from '../../footer/Footer';

import insta from '/insta.png';
import facebook from '/facebook.png';
import yt from '/yt.png';
import inIcon from '/in.png';

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

    const [scroll, setScroll] = useState(false);

    const [playing, setPlaying] = useState(false);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Set scroll to true when the user scrolls at all
    useEffect(() => {

        // add the scroll to the page instead of the window
        document.querySelector('.page')?.addEventListener('scroll', () => {
            setScroll(true);
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                setPlaying(true);
            }
        });
       
    }, []);



    useEffect(() => {
		if (shouldRestart) {
			setShouldRestart(false);
		}
	}, [shouldRestart]);

    return (
        <div className='page w-full flex flex-col items-center'>
            <div className='main-box'>

            <div className="part">

                <div className="header">

                    <div className="pageHeader">
                        Hack The Burgh X
                    </div>
                    <div className="description">
                    2-3rd March | Edinburgh, The Nucleus Building
                    </div>

                </div>


                <p>
                    Hack The Burgh is back for its 10th year! Join us for a weekend of hacking, workshops, and fun. Whether you're a seasoned hacker or just starting out, we have something for everyone.
                </p>

                {/* <div className="logo">
                    <img src='/Logo1.png' alt="Test" />
                </div> */}

            
                <div className='inner-box'>
                    {/* <h1>Registration Closes February 19th 12:00pm</h1> */}
                    <CountdownTimer targetDate={targetDate} />
                    <h1>Registration Closes February 19th 12:00pm</h1>
                    <div className="links">
                        <a href='https://register.2024.hacktheburgh.com/' target='_blank' >
                            Register
                        </a>
                        <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdWyk7F_E9m90cxkAr1AhJ9-xx_D5_u86ioZg8q3mawX3ydRw/viewform">
                            Volunteer
                        </a>
                    </div>

                </div>

                {/* <div className={`scroll-more ${scroll ? 'hide' : ''}`}>
                    <div className="text">
                    SCROLL <img src='/down-arrow.png' alt="Scroll" />
                    </div>
                </div> */}

                <div className="socialIcons">
                  
                    <a href="https://www.instagram.com/hacktheburgh/" target="_blank">
                        <img src={insta} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/hacktheburgh/" target="_blank">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCQKvr90vGzbgteMeM1A9nxQ" target="_blank">
                        <img src={yt} alt="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com/company/hack-the-burgh/" target="_blank">
                        <img src={inIcon} alt="LinkedIn" />
                    </a>
                </div>

            </div>

            {
                windowWidth > 1000 &&
                <div className ='game'>
                    {!shouldRestart && <Game restartGame={() => setShouldRestart(true)} />}
                </div>
            }
            

            {/* <div className={`playing ${playing ? 'hide' : ''}`} >
                <div className="text">
                    PRESS SPACE TO PLAY
                </div>
            </div> */}

            {/* <div className="div" style={{marginBottom: '60px'}}></div> */}
            
            {/* <div className ='logo'>
                <img src='../../../../public/Logo1.png' alt="Test" />
            </div> */}

            {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Home;
