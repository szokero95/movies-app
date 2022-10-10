import React, { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { categoryType } from "../../../utils/types";
import Card from "../../../components/CardRow/Card";

import "./Similar.scss";

type Props = {
  cat: categoryType;
  id: number;
};

type ItemType = {
  title?: string;
  name?: string;
  backdrop_path: string;
  poster_path?: string;
  id: number;
};

const Similar = ({ cat, id }: Props) => {
  const { getSimilar } = useApi();
  const [similars, setSimilars] = useState<any>();

  useEffect(() => {
    getSimilar(cat, id).then((similar) => setSimilars(similar));
  }, []);

  return similars ? (
    <div className="similars-container">
      <h1>Similars:</h1>
      <div className="card-row">
        {similars.results.map((result: ItemType, id: number) => {
          return id > 5 ? null : <Card key={id} item={result} cat={cat} />;
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Similar;
