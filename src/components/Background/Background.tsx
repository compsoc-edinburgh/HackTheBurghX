import React, { ReactNode } from 'react';
import './Background.scss';

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = (props: BackgroundProps) => {
    return (
        <div className="border">
            <div className='background'>
                {props.children}
            </div>
        </div>
    );
};

export default Background;
