/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipsFromId } from "../../services/api";
import "./CardDetail.css";
function CardDetail({ imgData }) {
  const { id } = useParams();
  const [detailShips, setDetailShips] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <div className="fond">
        <span className="span2">Starwars</span>
      </div>
      <div className="card-detail">
        <div className="thumbnail">
          {isLoading && <p className="loading">Loading...</p>}
          {imgData.map((imgData, key) =>
            detailShips.name === imgData.name ? (
              <img src={imgData.img} width="100px" height="100px" id={key} />
            ) : null
          )}
        </div>
        <div className="right">
          <div className="property">name {detailShips.name}</div>
          <div className="property">model {detailShips.model}</div>
          <div className="property">passengers {detailShips.passengers}</div>
          <div className="property">
            max_atmosphering_speed {detailShips.max_atmosphering_speed}
          </div>
          <div className="property">crew {detailShips.crew}</div>
          <div className="property">
            manufacturer {detailShips.manufacturer}
          </div>
          <div className="property">
            cargo_capacity {detailShips.cargo_capacity}
          </div>
        </div>
        <div className="card-detail-name">{detailShips.name}</div>
      </div>
    </div>
  );
}
export default CardDetail;
