import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card/Card';
import './Homepage.scss';


const Homepage = ({ beerData, filteredData, sortBeer, resetCards}) => {

  const initialRender = beerData.map((beer) => {
      return (
        <Card
          key={beer.id}
          id={beer.id}
          name={beer.name}
          abv={beer.abv}
          ibu={beer.ibu}
          tagline={beer.tagline}
          description={beer.description}
          img={beer.image_url}
        />
        )
      })

  const filteredRender = filteredData.map((beer) => {
      return (
        <Card
          key={beer.id}
          id={beer.id}
          name={beer.name}
          abv={beer.abv}
          ibu={beer.ibu}
          tagline={beer.tagline}
          description={beer.description}
          img={beer.image_url}
        />
      )
    })

  const displayedBeers = () => {
    if (filteredData.length) {
      return filteredRender
    } else {
      return initialRender
    }
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
        {displayedBeers()}
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