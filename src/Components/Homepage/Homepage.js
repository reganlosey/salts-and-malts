import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom'
import Card from '../Card/Card';
import './Homepage.scss';


const Homepage = ({ beerData, filteredData, sortBeer }) => {
  const [cardData, setCardData] = useState([])


  // const renderCards = () => {
  //   if (!filteredData.length) {
  //     const beerCards = beerData.map((beer) => {
  //       return (
  //         <Card
  //           key={beer.id}
  //           id={beer.id}
  //           name={beer.name}
  //           abv={beer.abv}
  //           ibu={beer.ibu}
  //           tagline={beer.tagline}
  //           description={beer.description}
  //           foodPairing={beer.food_Pairing} />
  //       )
  //     })
  //     setCardData(beerCards)
  //   } else {
  //     const beerCards = filteredData.map((beer) => {
  //       return (
  //         <Card
  //           key={beer.id}
  //           id={beer.id}
  //           name={beer.name}
  //           abv={beer.abv}
  //           ibu={beer.ibu}
  //           tagline={beer.tagline}
  //           description={beer.description}
  //           foodPairing={beer.food_Pairing} />
  //       )
  //     })
  //     setCardData(beerCards)
  //   }
  // }

  const initialRender = () => {
    const beerCards = beerData.map((beer) => {
      return (
        <Card
          key={beer.id}
          id={beer.id}
          name={beer.name}
          abv={beer.abv}
          ibu={beer.ibu}
          tagline={beer.tagline}
          description={beer.description}
          foodPairing={beer.food_Pairing} />
      )
    })
    setCardData(beerCards)
  }

  const filteredRender = () => {
    const beerCards = filteredData.map((beer) => {
      return (
        <Card
          key={beer.id}
          id={beer.id}
          name={beer.name}
          abv={beer.abv}
          ibu={beer.ibu}
          tagline={beer.tagline}
          description={beer.description}
          foodPairing={beer.food_Pairing} />
      )
    })
    setCardData(beerCards)
  }

  useEffect(() => {
    initialRender()
  }, [beerData])

  useEffect(() => {
    filteredRender()
  }, [filteredData])

  const resetCards = () => {
    initialRender()
  }
  return (
    <main>
    <div className="button-container">
      sort by beer type
      <button name="lager" onClick={(e) => sortBeer(e)}>lagers</button>
      <button name="ale" onClick={(e) => sortBeer(e)}>ales</button>
      <button name="ipa" onClick={(e) => sortBeer(e)}>ipas</button>
      <button name="saison" onClick={(e) => sortBeer(e)}>saisons</button>
      <button name="allBeers" onClick={resetCards}>reset</button>
    </div>
    <section className="homepage-grid">
      {cardData}
    </section>
    </main>
  )
}

















export default Homepage