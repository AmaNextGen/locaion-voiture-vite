import React from "react";
import { useParams } from "react-router-dom";

const ListingDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  );
};

export default ListingDetail;
