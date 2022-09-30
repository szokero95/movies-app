import React from "react";
import { Link } from "react-router-dom";
import GetImages from "../../utils/GetImages";
interface Props {
  item: {
    title?: string;
    name?: string;
    backdrop_path: string;
    poster_path?: string;
    id: number;
  };
}
const Card = ({ item }: Props) => {
  const images = GetImages(
    item.backdrop_path,
    item.poster_path ? item.poster_path : item.backdrop_path
  );

  return (
    <Link to="/">
      <img className="card" src={images.w500} />
    </Link>
  );
};

export default Card;
