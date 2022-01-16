import React, { useState, useEffect, Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.scss';
import MatchedBeers from './Components/MatchedBeers/MatchedBeers';
import Homepage from './Components/Homepage/Homepage';
import SingleBeer from './Components/SingleBeer/SingleBeer';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const fetchAllBeers = async () => {
    try {
      const res = await fetch('https://api.punkapi.com/v2/beers')
      const resJson = await res.json()
      setData(resJson)
    } catch (error) {
      setError(error)
    }
  }

  // const filterBeers = (type) => {
  //   const beerList = data.filter((beer) => {
  //     if (beer.name.toLowerCase().includes(type) || beer.tagline.toLowerCase().includes(type)) {
  //       return beer
  //     }
  //   })
  //   setData(beerList)
  //   return beerList
  // }

  useEffect(() => {
    fetchAllBeers()
  }, [])

  //https://api.punkapi.com/v2/beers?beer_name=buzz

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage beerData={data}/>} />
        <Route path="/:beerId" element={<SingleBeer beerData={data} />}/>
      </Routes>
    </main>
  )
}

export default App;
