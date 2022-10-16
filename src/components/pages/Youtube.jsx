import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import TopYoutube from "../includes/TopYoutube";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeBtn from "../includes/YoutubeBtn.jsx";
import Contact from "../layout/Contact";
import { useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);
  const [top, setTop] = useState([]);

  const search = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyA8SlPA6kqX0OihTlnTbSNz8HL0gULdzB0&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyA8SlPA6kqX0OihTlnTbSNz8HL0gULdzB0&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=AIzaSyA8SlPA6kqX0OihTlnTbSNz8HL0gULdzB0`
    )
      .then((response) => response.json())
      .then((result) => setTop(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Youtube", "Api"]} />
        <TopYoutube top={top} />
        <YoutubeSearch onSearch={search} />
        <YoutubeBtn onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Youtube;
