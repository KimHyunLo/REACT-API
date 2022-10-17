import React from "react";

function MovieBtn({ onSearch }) {
  function BtnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <div className="btn__list">
      <ul>
        <button onClick={BtnClick} className="search">
          Avengers
        </button>
        <button onClick={BtnClick} className="search">
          Titanic
        </button>
        <button onClick={BtnClick} className="search">
          Annabelle
        </button>
        <button onClick={BtnClick} className="search">
          Thor
        </button>
        <button onClick={BtnClick} className="search">
          Batman
        </button>
        <button onClick={BtnClick} className="search">
          Venom
        </button>
        <button onClick={BtnClick} className="search">
          Matrix
        </button>
        <button onClick={BtnClick} className="search">
          Panda
        </button>
        <button onClick={BtnClick} className="search">
          Avatar
        </button>
        <button onClick={BtnClick} className="search">
          Dune
        </button>
      </ul>
    </div>
  );
}

export default MovieBtn;
