import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage'
import Header from './Components/Header/Header'
import './App.scss';

const App = () => {
  const [data, setData] = useState([])

    const fetchAllBeers = async (url) => {
      try {
        const res = await fetch('https://api.punkapi.com/v2/beers')
        const resJson = await res.json()
        console.log(resJson)
        setData(resJson)
      } catch (err) {
        console.log(err)
      }
    }

    // fetchAllBeers()


  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  )
}

export default App;
