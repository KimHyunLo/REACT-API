import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";

function Youtube() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["Youtube", "Api"]} />
        <YoutubeCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Youtube;
