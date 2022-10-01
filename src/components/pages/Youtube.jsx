import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";
import { useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);

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
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Youtube;
