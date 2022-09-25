import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";

function Portfolio() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["Portfolio", "Api"]} />
        <PortCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Portfolio;
