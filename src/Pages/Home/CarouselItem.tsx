import React, { FC } from "react";
import "./CarouselItem.scss";
import { IResult } from "./Carousel";
import Button from "../../components/Button/Button";
import GetImages from "../../utils/GetImages";

type Props = {
  item: IResult;
};

const CarouselItem: FC<Props> = (props: Props) => {
  const { item } = props;
  const images = GetImages(
    item.backdrop_path,
    item.poster_path ? item.poster_path : item.backdrop_path
  );
  return (
    <div
      className="carousel-item"
      style={{ backgroundImage: `url(${images.og})` }}
    >
      <div className="bg">
        <div className="left">
          <h3>{item.title}</h3>
          <img src={images.w500} alt="" />
        </div>
        <div className="right">
          <p>{item.overview}</p>
          <div className="button-group">
            <Button onClick={() => {}} Outlined>
              Trailer
            </Button>
            <Button onClick={() => {}} Outlined={false}>
              More..
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
