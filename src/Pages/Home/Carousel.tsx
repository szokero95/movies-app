import React, { FC, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import CarouselItem, { IResult } from "./CarouselItem";
import mdbApi from "../../utils/api";

interface IMovies {
  results: [IResult];
}

SwiperCore.use([Autoplay]);

const Carousel: FC = () => {
  const [movies, setMovies] = useState<IMovies>();

  useEffect(() => {
    const response = mdbApi.getMovieList("popular");
    response.then((value) => {
      setMovies(value as unknown as IMovies);
      console.log(value);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      {movies?.results.map((item, id) => {
        return (
          <SwiperSlide>
            <CarouselItem key={id} item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
