import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider({ top }) {
  return (
    <div className="top-item">
      <a href={`https://www.youtube.com/watch?v=${top.id}`}>
        <img src={top.snippet.thumbnails.medium.url} alt={top.snippet.title} />
        <p>{top.snippet.title}</p>
      </a>
    </div>
  );
}

function TopYoutube({ top }) {
  if (top.length !== 0) {
    return (
      <div className="top-slide">
        <span className="title">
          <h1>Coding Videos</h1>
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
            <Slider top={top[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider top={top[9]} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default TopYoutube;
