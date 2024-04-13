// OurFavorites.js
import React from "react";
import "./OurFavorites.css";
// Color Bar Divider Line (imported from assets)
import colorBar from "../assets/color-bar.png";

// Menu Item Images (imported from assets)
import cremeBruleeImage from "../assets/menu-tems/web/Crème_Brûlée-web.jpg";
import stracciatellaImage from "../assets/menu-tems/web/Stracchiatella-web.jpg";
import caramelloImage from "../assets/menu-tems/web/Caramello_Chocolate_Crunch-web.jpg";
import limoncelloImage from "../assets/menu-tems/web/Limoncello-web.jpg";
import pistachioImage from "../assets/menu-tems/web/Pistachio-web.jpg";

const favorites = [
  {
    namePart1: "CREME",
    namePart2: "BRÛLÉE",
    image: cremeBruleeImage,
    vegan: true,
  },
  {
    namePart1: "STRACCIATELLA",
    image: stracciatellaImage,
  },
  {
    namePart1: "CARAMELLO",
    namePart2: "CHOCOLATE CRUNCH",
    image: caramelloImage,
  },
  {
    namePart1: "LIMONCELLO",
    image: limoncelloImage,
  },
  {
    namePart1: "PISTACHIO",
    image: pistachioImage,
  },
];

const OurFavorites = () => {
  return (
    <div className="favorites">
      <div className="title-container">
        <div className="title-line">
          <h1 className="favorites-lowercase">our</h1>
          <h1 className="favorites-uppercase">FAVORITES</h1>
        </div>
      </div>
      <p className="favorites-subtitle">Always available, always delicious</p>
      <div className="favorites-grid">
        {favorites.map((favorite, index) => (
          <div className="favorite-item" key={index}>
            <img
              src={favorite.image}
              alt={`${favorite.namePart1} ${favorite.namePart2}`}
              className="favorite-image"
            />
            <div className="favorite-label">
              <h2 className="favorite-name">
                <span className="flavor-part">{favorite.namePart1}</span>
                {favorite.namePart2 && (
                  <span className="flavor-part">{favorite.namePart2}</span>
                )}
              </h2>
              {favorite.vegan && index === 0 && (
                <div className="favorite-checkmark">V</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <img src={colorBar} alt="Decorative color bar" className="color-bar" />
    </div>
  );
};

export default OurFavorites;
