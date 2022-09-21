import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { getStarships , getStarshipsAPI} from '../../services/api'
import {
  Link
} from "react-router-dom";
function Card(props) {

  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [next, setNext] = useState('');

  
  useEffect(() => {
    setIsLoading(true);
    getStarships().then(res => {
      setStarships(res.data.results)
      setNext(res.data.next)
    }).finally(() => {
      setIsLoading(false);
    });
  }, [])

  const loadMore=()=>{
    getStarshipsAPI(next).then(res => {
      setStarships([...starships, ...res.data.results])
      if(res.data.next==null){
        setButtonVisible(false);
      }else{
        setNext(res.data.next)
      }
    })
  }

  return (
    <div className="container card-columns">
       {isLoading && <p className="loading">Loading...</p>}
      {starships.map(starship => {
        let result=starship.url.replace("https://swapi.dev/api/starships/",'')
        let id=result.slice(0)
        return (
          <div className="card mycard ">
            <div className="card-body">
              <h5 className="card-title">{starship.name}</h5>
              <p className="card-text">Model : {starship.model}</p>
              <p className="card-text">Hyperdrive Rating : {starship.hyperdrive_rating}</p>
              <p className="card-text">URL : {starship.url}</p>
              <Link to={`/cardDetail/${id}`}>
                <span>Detail about {starship.name}</span>
              </Link>
            </div>
          </div>
        )
      })}
      {buttonVisible && !isLoading && <button class="btn btn-warning" onClick={loadMore} >Load More</button>}
    </div>
  )
}

export default Card