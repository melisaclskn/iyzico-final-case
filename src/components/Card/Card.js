/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Card({ name, key, id, model, hyperdrive_rating, imgData }) {
  return (
    <div className="card mycard " key={key}>
      <div className="card-body">
        {imgData.map((imgData, key) =>
          name === imgData.name ? (
            <img src={imgData.img} width="100px" height="100px" id={key} />
          ) : null
        )}
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Model : {model}</p>
        <p className="card-text">Hyperdrive Rating : {hyperdrive_rating}</p>
        <Link to={`/cardDetail/${id}`}>
          <span>Detail about {name}</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
