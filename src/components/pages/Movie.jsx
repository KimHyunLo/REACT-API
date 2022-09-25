import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovCont from "../includes/MovCont";
import Contact from "../layout/Contact";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2da8ca399ff34f67831da4b85fa88dc7",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title title={["Movie", "Api"]} />
        <MovCont movies={movies} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Movie;
