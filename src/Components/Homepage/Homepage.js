import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom'
import Card from '../Card/Card'
import './Homepage.scss'


const Homepage = ({ beerData }) => {
  // const newId = useParams().beerId
  // console.log(newId)
  const beerNames = beerData.map((beer) => {
    return (
  <Card 
  id={beer.id}
  name={beer.name}
  abv={beer.abv}
  ibu={beer.ibu}
  tagline={beer.tagline}
  description={beer.description} />
    )
  })

  return (
    <section>
      {beerNames}
    </section>
  )
  // return (
  //   <section className="homepage">
  //     <div className="filter-container">
  //       <p className="start-text">let's get started</p>
  //       <div className="filter-links">
  //         <p>find beers by the food they pair with
  //           <Link to={`/beers`} />

  //         </p>
  //         <article>
  //         </article>
  //       </div>
  //     </div>
  //   </section>
  // )

}

















export default Homepage