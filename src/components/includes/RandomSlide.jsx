import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider({ random }) {
  return (
    <div className="random-item">
      <a href={random.links.html}>
        <img src={random.urls.regular} alt={random.id} />
      </a>
    </div>
  );
}

function RandomSlide({ random }) {
  if (random.length !== 0) {
    return (
      <div className="random-slide">
        <span className="title">
          <h1>Random Splash</h1>
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
            <Slider random={random[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider random={random[9]} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default RandomSlide;
