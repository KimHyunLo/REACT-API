import React from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import AboutCont from "../includes/AboutCont";
import Contact from "../layout/Contact";

function About() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["About", "Api"]} />
        <AboutCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default About;
