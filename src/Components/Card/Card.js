import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './Card.scss'


const Card = ({ id, name, abv, ibu, tagline, description }) => {
  return (
    <article className="beer-card" key={id}>
      <Link to={'/' + id} key={id}>
        <p>Name:{name}</p>
        <p>Abv: {abv}</p>
        <p>IBU: {ibu}</p>
        <p>Tagline: {tagline}</p>
        <p>Description: {description}</p>
        <p>Abv: {abv}</p>
      </Link>
    </article>
  )

}



export default Card