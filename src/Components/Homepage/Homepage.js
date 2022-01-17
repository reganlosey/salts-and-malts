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
        sort by beer type
        <button className="lager" name="lager" onClick={(e) => sortBeer(e)}>lagers</button>
        <button className="ale" name="ale" onClick={(e) => sortBeer(e)}>ales</button>
        <button className="ipa" name="ipa" onClick={(e) => sortBeer(e)}>ipas</button>
        <button className="saisons" name="saison" onClick={(e) => sortBeer(e)}>saisons</button>
        <button className="reset" name="allBeers" onClick={resetCards}>all beers</button>
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