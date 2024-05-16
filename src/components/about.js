import React, { useState, useEffect } from "react";
import "./About.css";
import logo from "../assets/Gelateria Del Centro STAMP.png";
import colorBar from "../assets/color-bar.png";
import { Link as ScrollLink } from "react-scroll";
import { MdLocationOn, MdEvent } from "react-icons/md";

// May 16th, 2024 - Updated the Special Events section so it automatically adds and removes the events based on the current date.

const events = [
	{
		title: "Capture the Elegance: A Photographer's Day at Warnors Theatre",
		date: new Date("2024-04-27T13:00:00"),
		location: {
			name: "Warnors Theatre, 1400 Fulton Street, Downtown Fresno",
			link: "https://maps.app.goo.gl/7sak5TaNFMnFwSMm6"
		},
		signUpLink:
			"https://checkout.square.site/merchant/MLS630T6EXVZN/checkout/7C77JOEDDGGKZTO5MEZR76X3"
	}
];

const About = () => {
	const [upcomingEvents, setUpcomingEvents] = useState([]);

	// Filter out past events
	useEffect(() => {
		const now = new Date();
		const upcoming = events.filter((event) => event.date > now);
		setUpcomingEvents(upcoming);
	}, []);

	// Render the component
	return (
		<>
			<div className="about-container">
				<div className="about-section">
					<img src={logo} alt="Gelateria Del Centro" className="store-logo" />
					<p className="about-description">
						At Gelateria Del Centro, we pride ourselves on being more than just
						a gelato shop. Our uniqueness stems from the fusion of authentic
						Italian gelato with the rich history and vibrant culture of downtown
						Fresno. What sets us apart is our commitment to creating an
						experience that transcends mere dessert indulgence.
					</p>
					<p className="about-description">
						As a woman-owned establishment helmed by Tami Waters, a seasoned
						interior designer, and Jordan Sanchez, an entrepreneurial advocate
						for the Downtown Fresno community, our gelateria is a celebration of
						art, history, and community. Housed within the historic Warnors
						Center, our gelato shop boasts an Art Nouveau aesthetic, adorned
						with 100-year-old original fixtures that perfectly harmonize with
						the ambiance of Warnors Theatre.
					</p>
					<p className="about-description">
						Our carefully curated flavors, sourced from top distributors,
						promise a taste of Italy's finest while honoring local tastes and
						preferences. But Gelateria Del Centro is more than delicious gelato.
						It's a space where families gather, where locals and visitors come
						together, and where every scoop tells a story of craftsmanship and
						community. Join us to experience the perfect blend of tradition,
						taste, and timeless charm right in the heart of downtown Fresno.
					</p>
				</div>
				<div className="info-section">
					<h2>HOURS</h2>
					<p>Open Daily: 12p-8:30p</p>
					<h2>SPECIAL EVENTS?</h2>
					<ScrollLink
						to="specialEvents"
						href="#specialEvents"
						smooth={true}
						duration={500}
						className="lets-talk"
					>
						<span className="about-special-events-text">Let's Talk!</span>
					</ScrollLink>
					<h2>CURRENT EVENTS</h2>
					{upcomingEvents.map((event, index) => (
						<div className="event-card" key={index}>
							<h3 className="event-title">{event.title}</h3>
							<p>
								<MdEvent className="date-icon" color="#187bcd" />
								Date & Time: {event.date.toLocaleString()}
								<br />
								<MdLocationOn className="location-icon" color="red" />
								Location:{" "}
								<a
									href={event.location.link}
									className="location-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									{event.location.name}
								</a>
							</p>
							<a
								href={event.signUpLink}
								className="current-events-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sign Up
							</a>
						</div>
					))}
					<h2>OUR WHY?</h2>
					<p>
						At Gelateria Del Centro, our business is more than gelato—it's a
						reflection of the passion and vision of my co-owner, Tami Waters &
						myself. Tami is a seasoned interior designer, and I am an
						entrepreneur deeply rooted in Downtown Fresno's community.
					</p>
					<p>
						Our inspiration arose from a shared commitment to elevate downtown
						Fresno's cultural landscape by infusing the charm of Italian gelato
						into the historic Warnors Center. Tami's eye for aesthetics and
						dedication to preserving heritage paired seamlessly with my
						entrepreneurial spirit and community-driven mindset. Together, we
						envision Gelateria Del Centro as a place where art, history, and
						delectable flavors converge.
					</p>
					<p>
						Our dream was not just to offer exceptional gelato but to craft a
						space where locals and visitors alike could indulge in a timeless
						experience.
					</p>
				</div>
			</div>
			<img src={colorBar} alt="Decorative color bar" className="color-bar" />
		</>
	);
};

export default About;
