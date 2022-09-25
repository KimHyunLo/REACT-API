import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import UnsplashCont from "../includes/UnsplashCont";
import Contact from "../layout/Contact";
import { useState, useEffect } from "react";

function Unsplash() {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ugid=fea0e7e4e9ff0191763ea810bb435a2a5546981");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/photos/random?client_id=_Qj8pAEH3PNaxSoZd9sPXo5pmx7noH38BI4nmYwxlSI&count=10",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setSplashes(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashCont splashes={splashes} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Unsplash;
