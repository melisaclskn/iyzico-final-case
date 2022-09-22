import React from 'react'
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Card({name, key,id,model,hyperdrive_rating}) {
    return (
      <div className="card mycard " key={key}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Model : {model}</p>
          <p className="card-text">Hyperdrive Rating : {hyperdrive_rating}</p>
          <Link to={`/cardDetail/${id}`}>
            <span>Detail about {name}</span>
          </Link>
        </div>
      </div>
    )
}

export default Card