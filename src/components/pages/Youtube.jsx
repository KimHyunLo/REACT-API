import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";
import { useEffect } from "react";

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&maxResults=30&key=AIzaSyA8SlPA6kqX0OihTlnTbSNz8HL0gULdzB0",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Youtube", "Api"]} />
        <YoutubeCont videos={videos} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Youtube;
