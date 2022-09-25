import React from "react";

function YoutubeList(props) {
  return (
    <div className="youtube__list">
      <ul>{/* {props.} */}</ul>
    </div>
  );
}

function YoutubeCont({ videos }) {
  console.log(videos);
  return (
    <div className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YoutubeSerach /> */}
          <YoutubeList list={videos} />
        </div>
      </div>
    </div>
  );
}

export default YoutubeCont;
