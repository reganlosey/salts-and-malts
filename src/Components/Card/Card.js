import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Card.scss'


const Card = ({ id, name, abv, ibu, tagline, description }) => {
  return (
    <article className="beer-card" key={id}>
      <p>{name}</p>
      <p>abv: {abv}</p>
      <p>ibu: {ibu}</p>
      <Link className="info-link" to={'/' + id} key={id} style={{ textDecoration: "none" }}>
        click here to see more</Link>
    </article>
  )

}



export default Card