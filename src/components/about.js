import React from "react";
import "./About.css";
import logo from "../assets/Gelateria Del Centro STAMP.png";
import colorBar from "../assets/color-bar.png";
import { Link as ScrollLink } from "react-scroll";
import { MdLocationOn, MdEvent } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-section">
          <img src={logo} alt="Gelateria Del Centro" className="store-logo" />
          <p className="about-description">
            Welcome to Gelateria Del Centro, your go-to destination for
            authentic Italian gelato in Fresno, California. Located in the
            bustling heart of the city, our shop is a sanctuary for gelato
            aficionados and dessert lovers.
          </p>
        </div>
        <div className="info-section">
          <h2>HOURS</h2>
          <p>Open Daily: 12p-8:30p</p>
          <h2>SPECIAL EVENTS?</h2>
          <ScrollLink
            to="specialEvents"
            smooth={true}
            duration={500}
            className="lets-talk"
          >
            <span className="about-special-events-text">Let's Talk!</span>
          </ScrollLink>
          <h2>CURRENT EVENTS</h2>
          <div className="event-card">
            <h3 className="event-title">
              Capture the Elegance: A Photographer's Day at Warnors Theatre
            </h3>
            <p>
              <MdEvent className="date-icon" color="#187bcd" />
              Date & Time: April 27th, 1pm or 3pm
              <br />
              <MdLocationOn className="location-icon" color="red" />
              Location:{" "}
              <a
                href="https://maps.app.goo.gl/7sak5TaNFMnFwSMm6"
                className="location-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Warnors Theatre, 1400 Fulton Street, Downtown Fresno
              </a>
            </p>
            <a
              href="https://checkout.square.site/merchant/MLS630T6EXVZN/checkout/7C77JOEDDGGKZTO5MEZR76X3"
              className="current-events-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </div>
          <h2>OUR WHY?</h2>
          <p>Bring delicious Italian-Style gelato to Downtown Fresno</p>
        </div>
      </div>
      <img src={colorBar} alt="Decorative color bar" className="color-bar" />
    </>
  );
};

export default About;
