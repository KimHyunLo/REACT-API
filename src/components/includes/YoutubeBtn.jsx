import React from "react";

function YoutubeBtn({ btnSearch }) {
  function BtnClick(e) {
    btnSearch(e.target.innerHTML);
  }
  return (
    <div className="btn__list">
      <ul>
        <button onClick={BtnClick} className="search">
          게임
        </button>
        <button onClick={BtnClick} className="search">
          요리 프로그램
        </button>
        <button onClick={BtnClick} className="search">
          예능
        </button>
        <button onClick={BtnClick} className="search">
          음악
        </button>
        <button onClick={BtnClick} className="search">
          영화
        </button>
        <button onClick={BtnClick} className="search">
          게임
        </button>
        <button onClick={BtnClick} className="search">
          애니메이션
        </button>
        <button onClick={BtnClick} className="search">
          랩
        </button>
        <button onClick={BtnClick} className="search">
          만화
        </button>
        <button onClick={BtnClick} className="search">
          일상
        </button>
      </ul>
    </div>
  );
}

export default YoutubeBtn;
