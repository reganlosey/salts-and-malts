import React, { useState, useEffect, Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import './App.scss';
import MatchedBeers from './Components/MatchedBeers/MatchedBeers';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const fetchAllBeers = async () => {
    try {
      const res = await fetch('https://api.punkapi.com/v2/beers')
      const resJson = await res.json()
      // console.log(resJson)
      setData(resJson)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchAllBeers()
  }, [])

  const filteredTypes = (type) => {
    const beerList = data.filter((beer) => {
      if (beer.name.toLowerCase().includes(type) || beer.tagline.toLowerCase().includes(type)) {
        return beer
      }
    })
    return beerList
  }

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <section className="homepage">
            <div className="filter-container">
              <p className="start-text">let's get started</p>
              <div className="filter-links">
                <p>find beers by the food they pair with
                </p>
                <Link to={'/beers'}> Thing</Link>
              </div>
            </div>
          </section>
        }
        />
      </Routes>
    </main>
  )
}

export default App;
