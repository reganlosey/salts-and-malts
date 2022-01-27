import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import SingleBeer from './Components/SingleBeer/SingleBeer';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import './App.scss';

const App = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([])


  const fetchAllBeers = async (url) => {
    try {
      const res = await fetch(url)
      const resJson = await res.json()
      setData(resJson)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllBeers('https://api.punkapi.com/v2/beers')
  }, [])

  const sortBeer = (e) => {
    const filteredCards = data.filter((beer) => {
      return beer.name.toLowerCase().includes(e.target.name) || beer.tagline.toLowerCase().includes(e.target.name)
    })
    setFilteredData(filteredCards)
  }

  const resetCards = () => {
    setFilteredData([])
  }

  if (!data.length) {
    return (
      <div className="loading-spinner">
        <h1>Site is brewing, hang tight!</h1>
        <ReactLoading type={'spinningBubbles'} color={"orange"} height={'200px'} width={'200px'}/>
      </div>
    )
  }
  else {
    return (
      <main className="App">
        <Header refreshData={fetchAllBeers} />
        <Routes>
          <Route path='/:invalidURL' element={<ErrorPage />} />
          <Route path='/' element={<Homepage beerData={data} filteredData={filteredData} sortBeer={sortBeer} resetCards={resetCards} />} />
          <Route path="/:beerId" element={<SingleBeer beerData={data} />} />
        </Routes>
      </main>
    )
  }
}

export default App;
