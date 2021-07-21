
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../styles.css";
import ImgProduct from './ImgProduct';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function ProductSwiper({rows,addcart}) {
  
  return (
  <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        "clickable": true
      }}
      navigation={true}
      className="mySwiper"
    >
    {rows.map(row =>
    <SwiperSlide key={row.id}>
        <div style={{margin:10}}>
        <ImgProduct row={row} addcart={addcart}/>
        </div>
    </SwiperSlide>
    )}
    </Swiper>
  </>
  )
}