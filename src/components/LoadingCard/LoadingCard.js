import React from "react";
import "./LoadingCard.css";
function LoadingCard() {
  return (
    <>
      <div>
        <div className="fond">
          <span className="span2">Starwars</span>
        </div>
        <div className="is-loading"></div>
        <div className="card-detail">
          <div className="thumbnail card-loading is-loading">
            <div className="image-loading"></div>
          </div>
          <div className="right card-loading is-loading">
            <div className="loading-title"></div>
          </div>
          <div className="property"></div>
        </div>
        <div className="card-detail-name"></div>
      </div>
    </>
  );
}

export default LoadingCard;
