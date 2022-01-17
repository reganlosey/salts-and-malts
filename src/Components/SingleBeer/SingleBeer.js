import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import './SingleBeer.scss'

const SingleBeer = () => {
  const [singleData, setSingleData] = useState([]);
  const [foodData, setFoodData] = useState([])
  let beerId = useLocation().pathname

  useEffect(() => {
    const fetchSingleBeer = async (url) => {
      const res = await fetch(url)
      const resJson = await res.json()

      setSingleData(resJson[0])
      setFoodData(resJson[0].food_pairing)
    }
    fetchSingleBeer(`https://api.punkapi.com/v2/beers${beerId}`)
  }, [])

  console.log(foodData[0])

  return (
    <section className="single-beer-container">
      <div className="beer-name">
        <p className="name">{singleData.name}</p>
        <p className="tagline">{singleData.tagline}</p>
        <img className="beer-mug" src="https://www.svgrepo.com/show/227376/beer.svg" alt="mug-of-beer"/>
      </div>
      <div className="beer-info">
        <p className="abv">abv: {singleData.abv}</p>
        <p className="ibu">ibu: {singleData.ibu}</p>
        pairs well with:
        <p>{foodData[0]}</p>
        <p>{foodData[1]}</p>
        <p>{foodData[2]}</p>
      </div>
    </section >
  )


}



export default SingleBeer
