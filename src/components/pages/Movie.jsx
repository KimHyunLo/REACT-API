import React from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovCont from "../includes/MovCont";
import Contact from "../layout/Contact";

function Movie() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["Movie", "Api"]} />
        <MovCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Movie;
