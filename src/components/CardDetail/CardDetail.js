/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipsFromId } from "../../services/api";
import LoadingCard from "../LoadingCard/LoadingCard";
import BackButton from "../BackButton/BackButton";
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
     
        <BackButton/>
      
        <span className="span2">Starwars</span>
      </div>
      {isLoading && <LoadingCard/>}
      {!isLoading &&  <div className="card-detail">
        <div className="thumbnail">
       
          {imgData.map((imgData, key) =>
            detailShips.name === imgData.name ? (
              <img src={imgData.img} width="100px" height="100px" id={key} />
            ) : null
          )}
        </div>
        <div className="right">
          <div className="property">
            <span className="property-title">Name : </span>
            {detailShips.name}</div>
          <div className="property"> <span className="property-title">Name : </span>Model : {detailShips.model}</div>
          <div className="property">Passengers : {detailShips.passengers}</div>
          <div className="property">
            Max Atmosphering Speed : {detailShips.max_atmosphering_speed}
          </div>
          <div className="property">Crew : {detailShips.crew}</div>
          <div className="property">
            Manufacturer : {detailShips.manufacturer}
          </div>
          <div className="property">
            Cargo Capacity : {detailShips.cargo_capacity}
          </div>
        </div>
        <div className="card-detail-name">{detailShips.name}</div>
      </div>}
     
    </div>
  );
}
export default CardDetail;
