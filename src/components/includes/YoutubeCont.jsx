import React from "react";

function YoutubeList({ title, image, channel }) {
  return (
    <div className="youtube__item">
      <div className="youtube__text">
        <h2>{title}</h2>
        <div>{channel}</div>
      </div>
      <div className="youtube__img">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

function YoutubeCont({ videos }) {
  return (
    <div className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YoutubeSerach /> */}
          {videos.map((video) => (
            <YoutubeList
              key={video.etag}
              title={video.snippet.title}
              image={video.snippet.thumbnails.high.url}
              channel={video.snippet.channelTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YoutubeCont;
