import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './SingleBeer.scss'

const SingleBeer = ({ beerData }) => {
  console.log(beerData)
  const [singleData, setSingleData] = useState('');
  let currentId = useParams().beerId

  const getSingleBeer = () => {
    const currentBeer = beerData.find((beer) => {
      return beer.id === parseInt(currentId)
    })
    return currentBeer
  }

  const fetchSingleBeer = async (url) => {
    try {
      const res = await fetch(url)
      const resJson = await res.json()
      setSingleData(resJson)
      console.log(singleData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchSingleBeer(`https://api.punkapi.com/v2/beers/${currentId}`)
    getSingleBeer()
  }, [])



  return (
    <section className="single-beer">
      <div className="beer-info">
        <p>{`${singleData.name}`}</p>

      </div>



    </section>
  )


}



export default SingleBeer
