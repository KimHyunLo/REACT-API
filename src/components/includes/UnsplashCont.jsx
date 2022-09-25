import React from "react";

function SplashList({ name, image }) {
  return (
    <div className="splash__item">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

function UnsplashCont({ splashes }) {
  return (
    <div className="splash__cont">
      <div className="container">
        <div className="splash__inner">
          {splashes.map((splash) => (
            <SplashList
              key={splash.id}
              name={splash.user.name}
              image={splash.urls.regular}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
