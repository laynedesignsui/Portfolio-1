import MoveBackground from "../tools/functions/MoveBackground";
import ToggleModal from "../tools/functions/ToggleModal";
import pdf from "../assets/David Bragg Resume.pdf";
import logo from "../assets/logo.svg";
import React from "react";

const Footer = () => (
    <div id="footer" onMouseMove={MoveBackground}>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img src={logo} className="footer__logo--img" />
          </figure>
          <div className="footer__social--list">
            <a
              href="#"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              Github
            </a>
            <a
              href="#"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={ToggleModal}
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              Contact
            </a>
            <a
              href={pdf}
              target="_blank"
              className="
              
            footer__social--link
            link__hover-effect
            link__hover-effect--white
            "
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; Layne Gelinas
          </div>
        </div>
      </div>
    </div>
  )

export default Footer
