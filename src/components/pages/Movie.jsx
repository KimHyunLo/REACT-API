import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import MovCont from "../includes/MovCont";
import Contact from "../layout/Contact";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=marvel"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results));
  };

  return (
    <>
      <Header />
      <Content>
        <Title title={["Movie", "Api"]} />
        <MovieSearch onSearch={search} />
        <MovCont movies={movies} />
        <Contact />
      </Content>
      <Footer />
    </>
  );
}

export default Movie;
