import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import ToggleModal from "../tools/functions/ToggleModal";
import pdf from "../assets/David Bragg Resume.pdf";
import React from "react";
import "../styles.css";
import MoveBackground from "../tools/functions/MoveBackground";

function Landing() {
  return (
    <div id="landing-page" onMouseMove={MoveBackground}>
      <header className="header">
        <div className="header__content">
          <h1 className="title">Hey</h1>
          <h1 className="title red">I'm Layne.</h1>
          <p className="header__para">
            I'm a <b className="red">Frontend Software Engineer</b> with a
            strong passion for building web applications with great user
            experineces.
            <br />
            Here's a bit more{" "}
            <b className="red click" onClick={ToggleModal}>
              about me.
            </b>
          </p>
          <div className="social__list">
            <a href="" className="social__link click">
              <FontAwesomeIcon icon={faPause} />
            </a>
            <a href="" className="social__link click">
              <FontAwesomeIcon icon={faCat} />
            </a>
            <a href={pdf} target="_blank" className="social__link click">
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
      </header>
      <a href="#">
        <button className="mail__btn click" onClick={ToggleModal}>
          <FontAwesomeIcon icon={faMailBulk} />
        </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
    </div>
  );
}

export default Landing;
