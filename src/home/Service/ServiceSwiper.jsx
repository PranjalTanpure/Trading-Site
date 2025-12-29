import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { services } from "./servicesData"; // your JSON data

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./ServiceSwiper.css";

export default function ServiceSlider() {
  return (
    <div className="serviceSwiperWrapper">
      <Swiper
      effect="coverflow"
      centeredSlides={true}
      initialSlide={1}
      slidesPerView="auto"
      spaceBetween={10}
      loop={false}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2,
      }}
        breakpoints={{
          0: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: "auto" }
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="serviceSwiper"
    >
      {services.map((item) => (
        <SwiperSlide key={item.id} className="card">
          <div className="card-content">
            <span className="icon">
              <i className={item.icon}></i>
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
    
  );
}

