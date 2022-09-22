import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getStarshipsFromId } from  '../../services/api'
function CardDetail() {

    const { id } = useParams();
    const [detailShips, setDetailShips] = useState('');
    useEffect(() => {
        getStarshipsFromId(id).then(res => {
            setDetailShips(res.data)
        })
    }, [id])
    return (
        <div>
            <div>name {detailShips.name}</div>
            <div>model {detailShips.model}</div>
            <div>passengers {detailShips.passengers}</div>
            <div>max_atmosphering_speed {detailShips.max_atmosphering_speed}</div>
            <div>crew {detailShips.crew }</div>
            <div>manufacturer {detailShips.manufacturer}</div>
            <div>cargo_capacity {detailShips.cargo_capacity }</div>
        </div>
    )
}
export default CardDetail