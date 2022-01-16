import React, { useState, useEffect, Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.scss';
import MatchedBeers from './Components/MatchedBeers/MatchedBeers';
import Homepage from './Components/Homepage/Homepage';
import SingleBeer from './Components/SingleBeer/SingleBeer';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState([]);

  const fetchAllBeers = async (url) => {
    try {
      const res = await fetch(url)
      const resJson = await res.json()
      setData(resJson)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetchAllBeers('https://api.punkapi.com/v2/beers')
  }, [])
  
  const sortBeer = (e) => {
    console.log('ahahah')
    const filteredCards = data.filter((beer) => {
      return beer.name.toLowerCase().includes(e.target.name) || beer.tagline.toLowerCase().includes(e.target.name)
    })
    setFilteredData(filteredCards)
  }

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage beerData={data} filteredData={filteredData} sortBeer={sortBeer}/>} />
        <Route path="/:beerId" element={<SingleBeer beerData={data} />}/>
      </Routes>
    </main>
  )
}

export default App;
