import React from "react"
import "../styles.css"
import navigation_logo from "../assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdjust } from "@fortawesome/free-solid-svg-icons"
import ToggleModal from "../tools/functions/ToggleModal"
import ToggleContrast from "../tools/functions/ToggleContrast"
import MoveBackground from "../tools/functions/MoveBackground"

function Navigation() {
  return (
    <div id="navigation" onMouseMove={MoveBackground}>
      <nav>
        <figure>
          <img src={navigation_logo} id="personal-logo" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link" onClick={ToggleModal}>
            <a
              href="#"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                        "
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                        "
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                        "
            >
              Contact
            </a>
          </li>
          <li className="nav__link click" onClick={ToggleContrast}>
            <a
              href="#"
              className="
                        nav__link--anchor
                        "
            >
              <FontAwesomeIcon icon={faAdjust} className="fa-adjust" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
