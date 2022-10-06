import React from "react";
import blinker__img from "../assets/blinker mockup.png";
import google__img from "../assets/google mockup.png";
import port__img from "../assets/Frontend Simplified.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import MoveBackground from "../tools/functions/MoveBackground";

function Projects() {
  return (
    <div id="projects" onMouseMove={MoveBackground}>
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="red">projects</span>
          </h1>
          <ul className="project__list">
            <li className="project">
              <div className="project__wrapper">
                <img src={blinker__img} className="project__img" />
                <div className="project__wrapper--bg">
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Car Sales Projects
                    </h3>
                    <h4 className="project__description--sub-title">
                      HTML, CSS, JavaScript, React
                    </h4>
                    <p className="project__description--para">
                      Lorem ipsum dolor sit amet. Id obcaecati minus vel impedit
                      autem sit animi voluptas sed voluptatem accusantium qui
                      voluptatibus dolore nobis nulla! Est iste dicta et
                      mollitia facere 33 nostrum ipsam eum molestiae accusantium
                      aut expedita culpa non voluptas dolorum hic dolorum totam.
                    </p>
                    <div className="project__description--links">
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faCat} />
                      </a>
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project__wrapper">
                <img src={google__img} className="project__img" />
                <div className="project__wrapper--bg">
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Car Sales Projects
                    </h3>
                    <h4 className="project__description--sub-title">
                      HTML, CSS, JavaScript, React
                    </h4>
                    <p className="project__description--para">
                      Lorem ipsum dolor sit amet. Id obcaecati minus vel impedit
                      autem sit animi voluptas sed voluptatem accusantium qui
                      voluptatibus dolore nobis nulla! Est iste dicta et
                      mollitia facere 33 nostrum ipsam eum molestiae accusantium
                      aut expedita culpa non voluptas dolorum hic dolorum totam.
                    </p>
                    <div className="project__description--links">
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faCat} />
                      </a>
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project__wrapper">
                <img src={port__img} className="project__img" />
                <div className="project__wrapper--bg">
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Car Sales Projects
                    </h3>
                    <h4 className="project__description--sub-title">
                      HTML, CSS, JavaScript, React
                    </h4>
                    <p className="project__description--para">
                      Lorem ipsum dolor sit amet. Id obcaecati minus vel impedit
                      autem sit animi voluptas sed voluptatem accusantium qui
                      voluptatibus dolore nobis nulla! Est iste dicta et
                      mollitia facere 33 nostrum ipsam eum molestiae accusantium
                      aut expedita culpa non voluptas dolorum hic dolorum totam.
                    </p>
                    <div className="project__description--links">
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faCat} />
                      </a>
                      <a href="#" className="project__description--link">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
