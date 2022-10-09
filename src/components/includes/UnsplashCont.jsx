import React from "react";

function SplashItem({ splash }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${splash.id}`}>
        <img src={splash.urls.regular} alt={splash.id} />
      </a>
    </li>
  );
}

function UnsplashCont({ splashes }) {
  return (
    <div className="splash__cont">
      <div className="container">
        <div className="splash__list">
          <ul>
            {splashes.map((splash, index) => (
              <SplashItem key={index} splash={splash} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
