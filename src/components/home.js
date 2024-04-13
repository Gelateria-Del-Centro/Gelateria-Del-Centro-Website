import React from "react";
import HeroCarousel from "./HeroCarousel";
import About from "./about";
import OurFavoritesMenu from "./OurFavorites";
import OurSpecials from "./OurSpecials";
import SpecialEvents from "./specialEvents"; // Import SpecialEvents
import Contact from "./contact";

// This is the main component that renders all the components that the home page is composed of
// The components are rendered in the order they appear on the page
// I removed ourSpecials from the Home component. Add it in under ourFavoritesMenu when needed.
const Home = () => {
  return (
    <>
      <HeroCarousel />
      <About />
      <OurFavoritesMenu />
      <SpecialEvents /> {/* Add SpecialEvents here */}
      <Contact />
    </>
  );
};

export default Home;
