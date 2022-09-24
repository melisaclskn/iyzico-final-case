import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import { API } from "../../constants";
import { getStarships, getStarshipsAPI } from "../../services/api";
import "../../styles/style.css";

function Cards() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [next, setNext] = useState("");
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    axios.get("/db/data.json").then((res) => {
      console.log(res.data, "ress data");
      setImgData(res.data);
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
      {isLoading && <p className="loading">Loading...</p>}

      {starships.map((starship, key) => {
        let result = starship?.url?.replace(
         `${API}`,
          ""
        );
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
