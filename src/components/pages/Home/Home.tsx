import React, { useState } from 'react';
import './Home.scss';
import { Game } from '../../game/components';

const Home: React.FC = () => {

    const [shouldRestart, setShouldRestart] = useState(false);
    
    return (
        <div className='page w-full flex flex-col items-center'>
            <p>Hack the Burgh X</p>
            <p>2-3rd March | Edinburgh, The Nucleus Building</p>
            <div className='flex gap-2'>
                <a target='_blank' href="https://google.com">Register</a>
                <a target='_blank' href="https://google.com">Join the team</a>
            </div>

            <Game restartGame={() => setShouldRestart(true)} />
        </div>
    );
};

export default Home;
