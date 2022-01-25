import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
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
        <div className="detailed-info">
        <p className="about">
            More about this brew:
          </p>
          <div className="details">
            <p>Prominent Hops: {hopsData}</p>
            <p>Alcohol By Volume: {singleData.abv}</p>
            <p>International Bitterness Units: {singleData.ibu}</p>
          <p className="pairs-with">
            Pairs well with:
          </p>
          <div className="pairings">
            <p>{foodData[0]}</p>
            <p>{foodData[1]}</p>
            <p>{foodData[2]}</p>
          </div>
          </div>
        </div>
        <img className="image" src={singleData.image_url}/>
      </div>
    </section >
  )


}



export default SingleBeer
