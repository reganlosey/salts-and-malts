import React, {useEffect,useState } from 'react';
import './Homepage.scss'


const Homepage = ( {beerData} ) => {
  const filteredTypes = (type) => {
    const beerList = beerData.filter((beer) => {
      if(beer.name.toLowerCase().includes(type) || beer.tagline.toLowerCase().includes(type)) {
        return beer
      }
    })
    return beerList
  }

  return (
    <div className="homepage">
      <div className="filter-container">
        <p className="start-text">let's get started</p>
        <div className="filter-links">
        <p>find beers by the food they pair with</p>

        </div>
      </div>
    </div>
  )

}

















export default Homepage