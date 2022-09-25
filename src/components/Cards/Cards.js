import React, { useEffect, useState } from "react";

import { API } from "../../constants";
import {
  getImg,
  getStarships,
  getStarshipsAPI,
  getAllStarships,
} from "../../services/api";
import Card from "../Card/Card";
import "../../styles/style.css";

(async () => {
  const allStarships = await getAllStarships();
  console.log("starships", allStarships);
})();

function Cards() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [next, setNext] = useState("");
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    getImg().then((res) => {
      setImgData(res);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getStarships()
      .then((res) => {
        setStarships(res.results);
        setNext(res.next);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    getStarshipsAPI(next).then((res) => {
      setStarships([...starships, ...res.results]);
      if (res.next == null) {
        setButtonVisible(false);
      } else {
        setNext(res.next);
      }
    });
  };
  
  return (
    <div className="container card-columns">
      <button onClick={getAllStarships}>get data</button>
      {isLoading && <p className="loading">Loading...</p>}
      {starships.map((starship, key) => {
        let result = starship?.url?.replace(`${API}`, "");
        let id = result?.slice(0);
        return (
          <Card
            key={key}
            name={starship.name}
            model={starship.model}
            hyperdrive_rating={starship.hyperdrive_rating}
            id={id}
            imgData={imgData}
          />
        );
      })}
      {buttonVisible && !isLoading && (
        <button className="btn btn-warning" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Cards;
