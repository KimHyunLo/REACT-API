import React from "react";

const search = (query) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${query}`
  )
    .then((response) => response.json())
    .then((result) => setMovies(result.results));
};

function MovieItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <span>{props.movie.title}</span>
      </a>
    </li>
  );
}

function MovieCont(props) {
  return (
    <div className="movie__cont">
      <div className="container">
        <div className="movie__list">
          <ul>
            {props.movies.map((movies, index) => (
              <MovieItem movie={movies} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovCont;
