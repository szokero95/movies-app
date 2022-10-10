import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import TrailerModal, {
  IVideos,
} from "../../components/TrailerModal/TrailerModal";
import { useApi } from "../../hooks/useApi";
import { useModal } from "../../hooks/useModal";
import GetImages from "../../utils/GetImages";
import { categoryType } from "../../utils/types";
import Cast from "./Cast/Cast";
import Similar from "./Similar/Similar";

import "./Details.scss";

const Details = () => {
  const getLocation = useLocation();
  const { isOpen, toggle } = useModal();
  const { getDetail, getVideos } = useApi();
  const [data, setData] = useState<any>();
  const [location, setLocation] = useState([""]);
  const [videos, setVideos] = useState<IVideos | null>(null);

  useEffect(() => {
    setLocation(getLocation.pathname.split("/"));
  }, [getLocation.pathname]);

  useEffect(() => {
    if (location.length > 1) {
      getDetail(location[1] as categoryType, parseInt(location[2])).then(
        (detail) => setData(detail)
      );
      getVideos(location[1] as categoryType, parseInt(location[2])).then(
        (video) => setVideos(video as unknown as IVideos)
      );
    }
  }, [location]);

  return data ? (
    <>
      <div
        className="outer"
        style={{
          backgroundImage: `url(${
            GetImages(data.backdrop_path, data.poster_path).og
          })`,
        }}
      >
        <div className="container">
          <div className="img-container">
            <img
              src={GetImages(data.backdrop_path, data.poster_path).w500}
              alt="Poster"
            />
          </div>
          <div className="data-container">
            <h1 className="title">{data.title ? data.title : data.name}</h1>
            <h2 className="tagline">{data.tagline}</h2>
            <h3 className="releasedate">
              {data.release_date ? data.release_date : data.first_air_date}
            </h3>
            <p className="overview">{data.overview}</p>
            <Button onClick={toggle} Outlined>
              Trailer
            </Button>
            <h3 className="cast-text">Cast:</h3>
            <Cast
              cat={getLocation.pathname.split("/")[1] as categoryType}
              id={data.id}
            />
          </div>
        </div>
      </div>
      <Similar
        cat={getLocation.pathname.split("/")[1] as categoryType}
        id={data.id}
      />
      {videos ? (
        <TrailerModal isOpen={isOpen} toggle={toggle} videos={videos} />
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
};

export default Details;
