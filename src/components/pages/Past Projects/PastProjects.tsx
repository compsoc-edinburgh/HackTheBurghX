import React from "react";
import "./PastProjects.scss";

const PastProjects: React.FC = () => {
  return (
    <div className="page">
      <h1 className="title">Here are some of our previous standouts:</h1>
      <ul className="past-projects">
        <li>
          <div className="project">
            <div className="project-img">
              <img
                src="https://raw.githubusercontent.com/HTB-X/website-frontend/main/src/assets/past-project-imgs/vibe-check.png"
                alt="Vibe Check"
                className="project-img"
              />
            </div>
            <div className="project-text">
              <h2 className="project-title">
                <a href="https://devpost.com/software/vibe-check-tox0wn">
                  Vibe Check
                </a>
              </h2>
              <p>
                Vibe Check is a web app to help students give real-time feedback to professors during lectures.
                <br />
                Winner in 2022.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="project">
            <div className="project-img">
              <img
                src="https://raw.githubusercontent.com/HTB-X/website-frontend/main/src/assets/past-project-imgs/pengu.png"
                alt="Penguu"
                className="project-img"
              />
            </div>
            <div className="project-text">
              <h2 className="project-title">
                <a href="https://devpost.com/software/penguu">
                  Penguu
                </a>
              </h2>
              <p>
                Penguu helps people with chronic illnesses to be able to live independently and safely at home, while maintaining a high level of privacy.
                <br />
                Winner in 2022.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="project">
            <div className="project-img">
              <img
                src="https://raw.githubusercontent.com/HTB-X/website-frontend/main/src/assets/past-project-imgs/pixeleconomy.png"
                alt="Pixel Economy"
                className="project-img"
              />
            </div>
            <div className="project-text">
              <h2 className="project-title">
                <a href="https://devpost.com/software/pixeleconomy">
                  Pixel Economy
                </a>
              </h2>
              <p>
                PixelEconomy is an online, virtual marketplace for creating,
                selling and buying pixel art that makes learning the
                fundamentals of trading fun and accessible.
                <br />
                Best of Show in 2020.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="project">
            <div className="project-img">
              <img
                src="https://raw.githubusercontent.com/HTB-X/website-frontend/main/src/assets/past-project-imgs/bread.png"
                alt="Is it bread?"
                className="project-img"
              />
            </div>
            <div className="project-text">
              <h2 className="project-title">
                <a href="https://devpost.com/software/is-it-bread">
                  Is it bread?
                </a>
              </h2>
              <p>
                Have you ever looked at an item and thought, "Is that bread?".
                Can you really trust yourself to make that judgement? Fear not,
                we have an intelligent app to decide that for you.
              </p>
            </div>
          </div>
        </li> 
      </ul>
    </div>
  );
};

export default PastProjects;
