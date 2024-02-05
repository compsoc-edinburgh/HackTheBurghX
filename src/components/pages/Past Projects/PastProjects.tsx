import React from "react";
import "./PastProjects.scss";
import vibeCheck from "/past-project-imgs/vibe-check.png";
import penguu from "/past-project-imgs/pengu.png";
import pixelEconomy from "/past-project-imgs/pixeleconomy.png";
import isItBread from "/past-project-imgs/bread.png";
import Footer from "../../footer/Footer";

const PastProjects: React.FC = () => {
  return (
    <div className="page">
      <h1 className="title">Previous Projects</h1>
      <ul className="past-projects">
        <li>
          <div className="project">
            <div className="project-img">
              <img
                src={vibeCheck}
                alt="Vibe Check"
                className="project-img"
              />
            </div>
            <a target="_blank" href="https://devpost.com/software/vibe-check-tox0wn">
                  Vibe Check 
            </a>
            <div className="project-text">
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
                src={penguu}
                alt="Penguu"
                className="project-img"
              />
            </div>
            <a target="_blank" href="https://devpost.com/software/penguu">
              Penguu
            </a>
            <div className="project-text">
             
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
                src={pixelEconomy}
                alt="Pixel Economy"
                className="project-img"
              />
            </div>
            <a target="_blank" href="https://devpost.com/software/pixeleconomy">
                  Pixel Economy
            </a>
            <div className="project-text">
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
                src={isItBread}
                alt="Is it bread?"
                className="project-img"
              />
            </div>
            <a target="_blank" href="https://devpost.com/software/is-it-bread">
                  Is it bread?
                </a>
            <div className="project-text">
              <p>
                Have you ever looked at an item and thought, "Is that bread?".
                Can you really trust yourself to make that judgement? Fear not,
                we have an intelligent app to decide that for you.
              </p>
            </div>
          </div>
        </li> 
      </ul>

      <Footer></Footer>
    </div>
  );
};

export default PastProjects;
