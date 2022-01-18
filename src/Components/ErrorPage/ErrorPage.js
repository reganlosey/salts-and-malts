import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'


const ErrorPage = ({ error }) => {

  // const checkErr = error ? <h1>{error.message}</h1> :
  //   <>
  //     <h2>🤨Looking for something, friend?</h2>
  //     <Link to={'/'}>Mosey on back to the homepage</Link>
  //   </>

  return (
    <div className="err-msg">
        <h2>🤨Looking for something, friend?</h2>
        <Link to={'/'} style={{color: "orange"}}>Click here to mosey on back to the homepage</Link>
    </div>
  )
}


export default ErrorPage;