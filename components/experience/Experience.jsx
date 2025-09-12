/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer <br /> Trainee{" "}
            </h3>
          </div>

          <div>
            <span className="exp__comp">B-Cloud Technology</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Frontend Developer Trainee <br /> Nov'24 - May'25
              </h3>
              <p className="exp__modal-description">
                Worked as a Frontend Developer Trainee for full-time at B-Cloud.
                Providing quality work to clients and company.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Web Page Development.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">I create UI Interfaces.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    I create UX Element Interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="exp__content">
          <div>
            <i className="uil uil-arrow exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer <br /> Intern
            </h3>
          </div>

          <div>
            <span className="exp__comp">Stalwart Technology</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Software Developer Intern <br /> April'25 - July'25
              </h3>
              <p className="exp__modal-description">
                Worked at Stalwart Tech as Intern for 3 months. Providing
                quality work to clients and company.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    I developed the User Interfaces.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Web Page Development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
