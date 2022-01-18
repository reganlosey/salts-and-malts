import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './ErrorPage.scss'


const ErrorPage = () => {

  return(
    <div className="errMsg">
      <h1>404</h1>
      <h2>🤨Looking for something, friend?</h2>
      <Link to={'/'}>Mosey on back to the homepage</Link>
    </div>
  )

}


export default ErrorPage;