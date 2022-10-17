import React from "react";

function UnsplashBtn({ onSearch }) {
  function BtnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <div className="btn__list">
      <ul>
        <button onClick={BtnClick} className="search">
          Spring
        </button>
        <button onClick={BtnClick} className="search">
          Beach
        </button>
        <button onClick={BtnClick} className="search">
          Tokyo
        </button>
        <button onClick={BtnClick} className="search">
          Busan
        </button>
        <button onClick={BtnClick} className="search">
          Street
        </button>
        <button onClick={BtnClick} className="search">
          Forest
        </button>
        <button onClick={BtnClick} className="search">
          City
        </button>
        <button onClick={BtnClick} className="search">
          Model
        </button>
        <button onClick={BtnClick} className="search">
          NewYork
        </button>
        <button onClick={BtnClick} className="search">
          Snow
        </button>
      </ul>
    </div>
  );
}

export default UnsplashBtn;
