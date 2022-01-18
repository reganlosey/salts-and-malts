import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import './SingleBeer.scss'

const SingleBeer = () => {
  const [singleData, setSingleData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [hopsData, setHopsData] = useState([]);
  let beerId = useLocation().pathname


  useEffect(() => {
    const fetchSingleBeer = async (url) => {
      const res = await fetch(url)
      const resJson = await res.json()

      setSingleData(resJson[0])
      setFoodData(resJson[0].food_pairing)
      setHopsData(resJson[0].ingredients.hops[0].name)
    }
    fetchSingleBeer(`https://api.punkapi.com/v2/beers${beerId}`)
  }, [])


  return (
    <section className="single-beer-container">
      <div className="beer-container">
        <div className="basic-info">
        <p className="name">{singleData.name}</p>
        <p className="tagline">{singleData.tagline}</p>
        <p className="description">{singleData.description}</p>
        </div>
        <img className="beer-mug" src="https://www.svgrepo.com/show/227376/beer.svg" alt="mug-of-beer"/>
      </div>
      <div className="beer-info">
        About this brew
        <p className="abv">ABV: {singleData.abv}</p>
        <p className="ibu">IBU: {singleData.ibu}</p>
        <p className="hops">Prominent Hops: {hopsData}</p>
        Pairs well with:
        <div className="pairings">
        <p>{foodData[0]}</p>
        <p>{foodData[1]}</p>
        <p>{foodData[2]}</p>
        </div>
      </div>
    </section >
  )


}



export default SingleBeer
