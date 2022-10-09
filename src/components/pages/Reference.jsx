import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import RefCont from "../includes/RefCont";
import Contact from "../layout/Contact";
import axios from "axios";

class Reference extends React.Component {
  state = {
    refers: [],
  };

  getRefers = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );
    this.setState({ refers: htmlRefer });
  };

  componentDidMount() {
    this.getRefers();
  }

  render() {
    const { refers } = this.state;
    return (
      <>
        <Header />
        <Content>
          <Title title={["Reference", "Api"]} />
          <RefCont refers={refers} />
          <Contact />
        </Content>
        <Footer />
      </>
    );
  }
}

export default Reference;
