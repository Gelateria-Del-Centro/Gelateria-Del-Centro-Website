// OurFavorites.js
import React from "react";
import "./OurFavorites.css";
// Color Bar Divider Line (imported from assets)
import colorBar from "../assets/color-bar.png";
// Only put affogato, spaghettieis, salted caramel, and limoncello please
// "Cashew milk Himalayan salted caramel"
// Menu Item Images (imported from assets)
import affogatoImage from "../assets/menu-tems/web/Affogato-web.jpg";
import spaghettieisImage from "../assets/menu-tems/web/Spaghettieis-web.jpg";
import saltedCaramelImage from "../assets/menu-tems/web/Cashew_Milk_Himalayan_Salted_Caramel-web.jpg";
import limoncelloImage from "../assets/menu-tems/web/Limoncello-web.jpg";

const favorites = [
  {
    namePart1: "AFFOGATO",
    image: affogatoImage,
    vegan: true,
    width: 300,
    height: 200,
  },
  {
    namePart1: "SPAGHETTIEIS",
    image: spaghettieisImage,
    width: 300,
    height: 200,
  },
  {
    namePart1: "CASHEW MILK",
    namePart2: "HIMALAYAN SALTED CARAMEL",
    image: saltedCaramelImage,
    width: 300,
    height: 200,
  },
  {
    namePart1: "LIMONCELLO",
    image: limoncelloImage,
    width: 300,
    height: 200,
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
              width={favorite.width}
              height={favorite.height}
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
