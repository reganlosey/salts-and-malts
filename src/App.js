import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage'
import Header from './Components/Header/Header'
import './App.scss';
import MatchedBeers from './Components/MatchedBeers/MatchedBeers';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([])

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



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage beerData={data}/>} />
        <Route path='/beers/type' element={<MatchedBeers/>}/>
      </Routes>
    </div>
  )
}

export default App;
