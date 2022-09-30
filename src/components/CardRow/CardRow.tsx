import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { categoryType, movieType, tvType } from "../../utils/types";
import Card from "./Card";

import "./CardRow.scss";

interface IResults {
  results: [];
}

interface ICardRow {
  cat: categoryType;
  type: movieType | tvType;
}

const CardRow = ({ cat, type }: ICardRow): JSX.Element => {
  const [list, setList] = useState<IResults>();
  const { getMovieList, getTvList } = useApi();

  useEffect(() => {
    switch (cat) {
      case "movie": {
        const response = getMovieList(type as movieType);
        response.then((value) => {
          setList(value as unknown as IResults);
        });
        break;
      }

      case "tv": {
        const response = getTvList(type as tvType);
        response.then((value) => {
          setList(value as unknown as IResults);
        });
        break;
      }
    }
  }, [cat, type]);

  return (
    <div className="card-row">
      {list?.results.map((card, id) => {
        return id > 5 ? null : <Card key={id} item={card} />;
      })}
    </div>
  );
};

export const MovieCardRow = ({ type }: { type: movieType }) => {
  return <CardRow cat={"movie"} type={type} />;
};
export const TvCardRow = ({ type }: { type: tvType }) => {
  return <CardRow cat="tv" type={type} />;
};
