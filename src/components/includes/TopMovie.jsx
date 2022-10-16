import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider({ movie }) {
  if (movie !== undefined) {
    return (
      <div className="slide_item">
        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
        </a>
      </div>
    );
  } else {
    return;
  }
}

function TopMovie({ topMovies }) {
  return (
    <div className="top_movies">
      <span className="title">
        <h1>Top Movies</h1>
      </span>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider movie={topMovies[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[7]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[8]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider movie={topMovies[9]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopMovie;
