import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className='page w-full flex flex-col items-center'>
            <p>Hack the Burgh X</p>
            <p>2-3rd March | Edinburgh, The Nucleus Building</p>
            <div className='flex gap-2'>
                <a href="">Register</a>
                <a href="">Join the team</a>
            </div>
        </div>
    );
};

export default Home;
