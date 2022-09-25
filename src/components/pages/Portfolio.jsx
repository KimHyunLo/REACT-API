import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import Title from "../layout/Title";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Content>
//         <Title title={["Portfolio", "Api"]} />
//         <PortCont />
//         <Contact />
//       </Content>
//       <Footer />
//     </>
//   );
// }

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  mainAnimation = () => {};

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );
    this.setState({ ports: ports });
  };

  componentDidMount() {
    this.getPorts();
  }

  render() {
    const { ports } = this.state;
    return (
      <>
        <Header />
        <Content>
          <Title title={["Portfolio", "Api"]} />
          <PortCont ports={ports} />
          <Contact />
        </Content>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
