import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Homepage.scss';


const Homepage = ({ beerData, filteredData, sortBeer }) => {
  const [cardData, setCardData] = useState([])

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
        />
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
        />
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
        <button className="sort-btn lager" name="lager" onClick={(e) => sortBeer(e)}>Lagers</button>
        <button className="sort-btn ale" name="ale" onClick={(e) => sortBeer(e)}>Ales</button>
        <button className="sort-btn ipa" name="ipa" onClick={(e) => sortBeer(e)}>Ipas</button>
        <button className="sort-btn saison" name="saison" onClick={(e) => sortBeer(e)}>Saisons</button>
        <button className="sort-btn reset" name="allBeers" onClick={(e) => resetCards(e)}>All Beers</button>
      </div>
      <section className="homepage-grid">
        {cardData}
      </section>
    </main>
  )
}

export default Homepage

Homepage.propTypes = {
  beerData: PropTypes.array,
  filteredData: PropTypes.array,
  sortBeer: PropTypes.func
}