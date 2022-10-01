import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";
import { useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);

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
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Youtube", "Api"]} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Youtube;
