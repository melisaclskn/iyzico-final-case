import React, { useEffect, useState } from "react";

import { API } from "../../constants";
import {
  getImg,
  getStarships,
  getStarshipsAPI,
  getAllStarships,
} from "../../services/api";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMore from "../../components/LoadMore/LoadMore";
import LoadingCards from "../../components/LoadingCards/LoadingCards";
import "../../styles/style.css";
import "./Cards.css";

function Cards() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [next, setNext] = useState("");
  const [imgData, setImgData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allStarships, setAllStarships] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const allStarships = await getAllStarships();
      setAllStarships(allStarships);
    };
    getData();
  }, []);

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
    <>
      <SearchBar
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        allStarships={allStarships}
        setFilteredResults={setFilteredResults}
        starships={starships}
      />

      <div className="cards-container card-columns">
        {isLoading && <LoadingCards />}
        <>
          {searchInput.length > 1
            ? filteredResults.map((starship, key) => {
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
              })
            : starships.map((starship, key) => {
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
        </>
      </div>
      <div className="button-more">
        {buttonVisible && !isLoading && <LoadMore loadMore={loadMore} />}
      </div>
    </>
  );
}

export default Cards;
