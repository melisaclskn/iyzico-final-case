import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { getStarships, getStarshipsAPI } from '../../services/api'
import Card from '../Card/Card';
function Cards() {

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

  const loadMore = () => {
    getStarshipsAPI(next).then(res => {
      setStarships([...starships, ...res.data.results])
      if (res.data.next == null) {
        setButtonVisible(false);
      } else {
        setNext(res.data.next)
      }
    })
  }

  return (
    <div className="container card-columns">
      {isLoading && <p className="loading">Loading...</p>}
      {starships.map((starship, key) => {
        let result = starship?.url?.replace("https://swapi.dev/api/starships/", '')
        let id = result?.slice(0);
        return (
          <Card key={key} name={starship.name} model={starship.model} hyperdrive_rating={starship.hyperdrive_rating} id={id} />
        )
      })}
     {buttonVisible && !isLoading && <button className="btn btn-warning" onClick={loadMore} >Load More</button>}
    </div>
  )
}

export default Cards