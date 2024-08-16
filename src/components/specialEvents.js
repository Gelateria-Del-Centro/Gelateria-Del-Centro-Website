import React from "react";
import "./specialEvents.css";
import gelatoBikeImage from "../assets/gelato-bike.jpeg";
import { Link as ScrollLink } from "react-scroll";

const SpecialEvents = () => {
	return (
		<div id="specialEvents" className="special-events-container">
			<div className="special-events-image">
				<img src={gelatoBikeImage} alt="Gelato Bike" />
			</div>
			<div className="special-events-text">
				<h1>
					<span className="text-italic">your</span>
					<span className="text-bold"> SPECIAL EVENT,</span>
				</h1>
				<h1>
					<span className="text-italic">our</span>
					<span className="text-bold"> DELICIOUS GELATO.</span>
				</h1>
				<p className="about-description-text">
					Gelateria Del Centro is excited to offer our venue for your private
					events in Downtown Fresno. While we no longer provide off-site
					catering, we invite you to experience the charm of our gelato shop for
					your special occasions. Our venue is perfect for intimate gatherings,
					birthday parties, and small corporate events. We offer a customizable
					menu tailored to your event's needs, ensuring that your guests can
					enjoy a wide range of our delicious gelato flavors in a unique and
					memorable setting. To make your next event unforgettable with our
					in-house gelato experience, please contact us below. <br></br>We look
					forward to helping you create sweet memories in the heart of Downtown
					Fresno!
				</p>
				<ScrollLink
					to="contact"
					smooth={true}
					duration={500}
					className="contact-link"
				>
					Contact us
				</ScrollLink>
			</div>
		</div>
	);
};

export default SpecialEvents;
