/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipsFromId } from "../../services/api";
function CardDetail({ imgData }) {
  const { id } = useParams();
  const [detailShips, setDetailShips] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(imgData, "CardDetail");
    setIsLoading(true);
    getStarshipsFromId(id)
      .then((res) => {
        setDetailShips(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {imgData.map((imgData, key) =>
        detailShips.name === imgData.name ? (
          <img src={imgData.img} width="100px" height="100px" id={key} />
        ) : null
      )}

      <div>name {detailShips.name}</div>
      <div>model {detailShips.model}</div>
      <div>passengers {detailShips.passengers}</div>
      <div>max_atmosphering_speed {detailShips.max_atmosphering_speed}</div>
      <div>crew {detailShips.crew}</div>
      <div>manufacturer {detailShips.manufacturer}</div>
      <div>cargo_capacity {detailShips.cargo_capacity}</div>
    </div>
  );
}
export default CardDetail;
