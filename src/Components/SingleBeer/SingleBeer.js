import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import './SingleBeer.scss'

const SingleBeer = () => {
  const [singleData, setSingleData] = useState([]);
  let beerId = useLocation().pathname
  // console.log(beerId)

  // const getSingleBeer = () => {
  //   const currentBeer = beerData.find((beer) => {
  //     return beer.id === parseInt(beerId)
  //   })
  //   return currentBeer
  // }

  console.log(singleData)
  
  useEffect(() => {
    const fetchSingleBeer = async (url) => {
        const res = await fetch(url)
        const resJson = await res.json()
        
        setSingleData(resJson[0])
    }
    fetchSingleBeer(`https://api.punkapi.com/v2/beers${beerId}`)
  }, [])



  return (
    <section className="single-beer">
      <div className="beer-info">
        <p className="beer-name">{singleData.name}</p>
        <p className="abv">{singleData.abv}</p>
        <p className="ibu">{singleData.ibu}</p>
        <p className="food-pairing">{singleData.food_pairing}</p>
        

      </div>



    </section>
  )


}



export default SingleBeer
