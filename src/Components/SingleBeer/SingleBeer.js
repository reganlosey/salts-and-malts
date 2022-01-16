import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './SingleBeer.scss'

const SingleBeer = ({ beerData }) => {
  console.log(beerData)
  const [singleData, setSingleData] = useState([]);
  let currentId = useParams().beerId

  const getSingleBeer = () => {
    const currentBeer = beerData.find((beer) => {
      return beer.id === parseInt(currentId)
    })
    setSingleData(currentBeer)
  }

  useEffect(() => {
    getSingleBeer()
    return () => {
      setSingleData({
      })
    }
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
