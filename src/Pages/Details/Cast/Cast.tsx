import React, { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { categoryType } from "../../../utils/types";
import CastMember from "./CastMember";

import "./Cast.scss";
type Props = {
  cat: categoryType;
  id: number;
};

const Cast = ({ cat, id }: Props) => {
  const { getCredits } = useApi();
  const [cast, setCast] = useState<any>();

  useEffect(() => {
    getCredits(cat, id).then((credits) => setCast(credits));
  }, [cat, id]);

  return cast ? (
    <div className="cast-container">
      {cast.cast.map((member: object): JSX.Element => {
        return <CastMember member={member} />;
      })}
    </div>
  ) : (
    <></>
  );
};

export default Cast;
