import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import RefCont from "../includes/RefCont";
import Contact from "../layout/Contact";

function Reference() {
  return (
    <>
      <Header />
      <Content>
        <Title title={["Reference", "Api"]} />
        <RefCont />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Reference;
