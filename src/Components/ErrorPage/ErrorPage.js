import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'


const ErrorPage = () => {

  return (
    <div className="err-msg">
        <h2>🤨Looking for something, friend?</h2>
        <Link to={'/'} style={{color: "darkorange"}}>Click here to mosey on back to the homepage</Link>
    </div>
  )
}


export default ErrorPage;