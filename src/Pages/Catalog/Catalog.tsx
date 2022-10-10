import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../../components/CardRow/Card";
import { useApi } from "../../hooks/useApi";
import { categoryType } from "../../utils/types";

import "./Catalog.scss";

type ItemType = {
  title?: string;
  name?: string;
  backdrop_path: string;
  poster_path?: string;
  id: number;
};

const Catalog = () => {
  const getLocation = useLocation();
  const { search, getMovieList, getTvList } = useApi();
  const [type, setType] = useState<categoryType>();
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (type && query.length > 0) {
      search(type, { params: { query: query } }).then((res) => setData(res));
    } else if (type === "movie") {
      getMovieList("popular").then((res) => setData(res));
    } else {
      getTvList("popular").then((res) => setData(res));
    }
  }, [data]);

  useEffect(() => {
    if (getLocation.pathname.split("/")[1] === "movies") setType("movie");
    if (getLocation.pathname.split("/")[1] === "series") setType("tv");
    setQuery("");
  }, [getLocation.pathname]);

  return type === undefined ? (
    <></>
  ) : (
    <div className="catalog-container">
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="catalog-card-row">
        {data &&
          data.results.map((result: ItemType, id: number) => {
            return id > 11 ? null : <Card key={id} item={result} cat={type} />;
          })}
      </div>
    </div>
  );
};

export default Catalog;
