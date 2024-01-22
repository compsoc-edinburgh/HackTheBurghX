import React from 'react';
import './PastProjects.scss';

const PastProjects: React.FC = () => {
    return (
       <div className='page'>
        <h1 className='title'>Here are some of our previous standouts:</h1>
            <ul className='past-projects'>
                <li>
                    <div className="project">
                        <div className="project-img">
                            <img src='./src/assets/past-project-imgs/pixeleconomy.png' alt='Pixel Economy' className='project-img' />
                        </div>
                        <div className="project-text">
                            <h2 className='project-title'><a href="https://devpost.com/software/pixeleconomy">Pixel Economy</a></h2>
                            <p>
                                PixelEconomy is an online, virtual marketplace for creating, selling and buying pixel art that makes learning the fundamentals of trading fun and accessible.
                                <br />
                                Best of Show in 2020.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="project-img">
                            <img src='./src/assets/past-project-imgs/edna.png' alt='Edna' className='project-img' />
                        </div>
                        <div className="project-text">
                            <h2 className='project-title'><a href="https://devpost.com/software/edna-a-writing-chat-bot">Edna</a></h2>
                            <p>
                                Writing is hard! Having no one to talk to about it makes it harder. Worry no more, Edna is here to listen to your writing woes. 
                            <br />
                                Runner-Up in 2020.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="project-img">
                            <img src='./src/assets/past-project-imgs/bread.png' alt='Is it bread?' className='project-img' />
                        </div>
                        <div className="project-text">
                            <h2 className='project-title'><a href='https://devpost.com/software/is-it-bread'>Is it bread?</a></h2>
                            <p>
                                Have you ever looked at an item and thought, "Is that bread?". Can you really trust yourself to make that judgement? Fear not, we have an intelligent app to decide that for you. 
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="project-img">
                            <img src='./src/assets/past-project-imgs/minepi.png' alt="MinePi" className='project-img' />
                        </div>
                        <div className="project-text">
                            <h2 className='project-title'><a href="https://devpost.com/software/minepi.png">MinePi</a></h2>
                            <p>
                                A mod to let you control your Raspberry pi from Minecraft.
                            <br />
                                Runner-Up for best hardware hack in 2020.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
    );
};

export default PastProjects;
