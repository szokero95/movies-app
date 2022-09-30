import React, { FC } from "react";
import { MovieCardRow, TvCardRow } from "../../components/CardRow/CardRow";
import Carousel from "./Carousel/Carousel";
import "./Home.scss";

const Home: FC = () => {
  return (
    <div className="Home">
      <Carousel />
      <h2>Most Popular TV shows</h2>
      <TvCardRow type="popular" />
      <h2>Top Rated Movies</h2>
      <MovieCardRow type="top_rated" />
    </div>
  );
};

export default Home;
