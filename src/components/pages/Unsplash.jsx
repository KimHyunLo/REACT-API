import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import UnsplashCont from "../includes/UnsplashCont";
import Contact from "../layout/Contact";

function unsplash() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default unsplash;
