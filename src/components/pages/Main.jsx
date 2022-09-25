import React from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";

function Main() {
  return (
    <>
      <Header />
      <Content>
        <MainCont />
      </Content>
      <Footer />
    </>
  );
}

export default Main;
