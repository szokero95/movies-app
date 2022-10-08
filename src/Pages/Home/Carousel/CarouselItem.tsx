import React, { useEffect, useState } from "react";
import "./CarouselItem.scss";

import Button from "../../../components/Button/Button";
import GetImages from "../../../utils/GetImages";
import { useModal } from "../../../hooks/useModal";
import TrailerModal, {
  IVideos,
} from "../../../components/TrailerModal/TrailerModal";
import { useApi } from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

export interface IResult {
  title: string;
  backdrop_path: string;
  poster_path?: string;
  overview: string;
  id: number;
}

type Props = {
  item: IResult;
};

const CarouselItem = ({ item }: Props) => {
  const { getVideos } = useApi();
  const { isOpen, toggle } = useModal();
  const [videos, setVideos] = useState<IVideos | null>(null);
  const images = GetImages(
    item.backdrop_path,
    item.poster_path ? item.poster_path : item.backdrop_path
  );

  const navigate = useNavigate();
  const handleDetails = () => navigate(`/movie/${item.id}`);

  useEffect(() => {
    const result = getVideos("movie", item.id);
    result.then((data) => setVideos(data as unknown as IVideos));
  }, [item.id]);

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
            <Button onClick={toggle} Outlined>
              Trailer
            </Button>
            <Button onClick={handleDetails} Outlined={false}>
              More..
            </Button>
          </div>
        </div>
      </div>
      {videos ? (
        <TrailerModal isOpen={isOpen} toggle={toggle} videos={videos} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CarouselItem;
