import React from "react";

function MovieList({ title, desc, image, date }) {
  return (
    <div className="movie__item">
      <div className="movie__text">
        <h2>{title}</h2>
        <div className="movie__date">release date: {date}</div>
        <p>{desc}</p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
    </div>
  );
}

function MovCont({ movies }) {
  return (
    <div className="movie__cont">
      <div className="container">
        <div className="movie__inner">
          {movies.map((movie) => (
            <MovieList
              key={movie.id}
              title={movie.title}
              desc={movie.overview}
              image={movie.poster_path}
              date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovCont;
