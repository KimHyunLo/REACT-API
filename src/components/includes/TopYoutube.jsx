import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const pagination = {
  clickable: true,
};
function TopYoutube({ top }) {
  if (top.length !== 0) {
    return (
      <div className="youtube__swiper">
        <div className="top-slide">
          <span className="title">
            <h1>Popular Videos</h1>
          </span>
          <Swiper
            slidesPerView={3}
            spaceBetween={-50}
            loop={true}
            navigation={true}
            pagination={pagination}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
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
      </div>
    );
  }
}

export default TopYoutube;
