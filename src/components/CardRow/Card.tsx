import React from "react";
import { Link } from "react-router-dom";
import GetImages from "../../utils/GetImages";
import { categoryType } from "../../utils/types";

import "./Card.scss";

interface Props {
  item: {
    title?: string;
    name?: string;
    backdrop_path: string;
    poster_path?: string;
    id: number;
  };
  cat: categoryType;
}
const Card = ({ item, cat }: Props) => {
  const images = GetImages(
    item.backdrop_path,
    item.poster_path ? item.poster_path : item.backdrop_path
  );

  return (
    <Link
      to={`/${cat}/${item.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="card-link"
    >
      <img className="card" src={images.w500} />
    </Link>
  );
};

export default Card;
