import React, { useEffect } from "react";
import GetImages from "../../../utils/GetImages";

const CastMember = ({ member }: { member: any }) => {
  useEffect(() => {
    console.log(member);
  }, []);

  return (
    <div
      className="member-container"
      style={{
        backgroundImage: `url(${GetImages(member.profile_path).w500})`,
      }}
    >
      <div className="dark">
        <p>{member.name}</p>

        <p>{member.character}</p>
      </div>
    </div>
  );
};

export default CastMember;
