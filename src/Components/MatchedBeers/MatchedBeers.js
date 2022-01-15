import React, {useEffect,useState } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import './MatchedBeers.scss'

const MatchedBeers = ({ filteredBeers }) => {
  let location = useLocation()
  console.log(location)
  console.log(filteredBeers)
  return (
    <h1>MatchedBeers!</h1>
  )

}





export default MatchedBeers

