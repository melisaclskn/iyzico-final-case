import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import {
  Link
} from "react-router-dom";
function Card() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [next, setNext] = useState('');
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://swapi.dev/api/starships/').then(res => {
      setStarships(res.data.results)
      console.log(res.data.next,'nexttt')
      setNext(res.data.next)
    }).finally(() => {
      setIsLoading(false);
    });
  }, [])

  const loadMore=()=>{
    console.log("loadmore")
    axios.get(next).then(res => {
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
        return (
          <div className="card mycard ">
            <div className="card-body">
              <h5 className="card-title">{starship.name}</h5>
              <p className="card-text">Model : {starship.model}</p>
              <p className="card-text">Hyperdrive Rating : {starship.hyperdrive_rating}</p>
              <Link to="/cardDetail">Detail</Link>
            </div>
          </div>
        )
      })}

      {buttonVisible && <button class="btn btn-warning" onClick={loadMore} >Load More</button>}
    </div>
  )
}

export default Card