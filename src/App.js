import React, {useState, useEffect, Fragment} from 'react'
import {BroswerRouter} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage'
import Header from './Components/Header/Header'
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Homepage/>
    </Fragment>
  );
}

export default App;
