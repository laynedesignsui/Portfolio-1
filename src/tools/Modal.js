import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Form from "./functions/Form";
import ToggleModal from "./functions/ToggleModal";
function Modal() {
  return (
    <div id="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__sub-title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Frontend Software Engineer.
        </h4>
        <p className="modal__para">
          I'm a 19 year old Canadian
          <b className="red"> frontend software engineer </b>
          with a strong passion for developing websites with great
          <b className="red"> user experiences.</b>
          <br />I currently work on exetremly difficult engineering problem and
          learn from developers consisting of some of the most
          <b className="red"> talented </b>
          and <b className="red">experinced</b> software engineers every day.
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            />
            <b className="language__name">HTML</b>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
            />
            <b className="language__name">CSS</b>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
            />
            <b className="language__name">JavaScript</b>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <b className="language__name">React</b>
          </figure>
        </div>
      </div>

      <div className="modal__half modal__contact">
        <FontAwesomeIcon icon={faClose} className="modal__exit click" onClick={ToggleModal}/>
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h3 className="modal__sub-title modal__sub-title--contact">
          I would love to hear from you!
        </h3>
        <form id="contact__form" onSubmit={Form}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input className="input" name="user_name" type="text" />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input className="input" name="user_email" type="email" />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="input" name="message" type="text" />
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <FontAwesomeIcon icon={faSpinner} className="fa-spinner" />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking with you soon.
        </div>
      </div>
    </div>
  );
}

export default Modal;
