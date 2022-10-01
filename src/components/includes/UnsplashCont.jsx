import React from "react";

function SplashItem({ splash }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${splash.id}`}>
        <img src={splash.urls.regular} alt={splash.id} />
        <span>by "{splash.user.name}"</span>
        <span>{splash.created_at}</span>
      </a>
    </li>
  );
}

function UnsplashCont({ splashes }) {
  console.log(splashes[0]);
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
