import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import RandomSlide from "../includes/RandomSlide";
import UnsplashSearch from "../includes/UnsplashSearch";
import UnsplashCont from "../includes/UnsplashCont";
import Contact from "../layout/Contact";
import { useState, useEffect } from "react";

function Unsplash() {
  const [splashes, setSplashes] = useState([]);
  const [random, setRandom] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=_Qj8pAEH3PNaxSoZd9sPXo5pmx7noH38BI4nmYwxlSI&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setSplashes(result.results));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=seoul&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => {
        setSplashes(result.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=_Qj8pAEH3PNaxSoZd9sPXo5pmx7noH38BI4nmYwxlSI&count=10"
    )
      .then((response) => response.json())
      .then((result) => {
        setRandom(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Unsplash", "Api"]} />
        <RandomSlide random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont splashes={splashes} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Unsplash;
