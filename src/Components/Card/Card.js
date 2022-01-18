import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ id, name, abv, ibu, img}) => {
  return (
    <article className="beer-card" key={id}>
      <div className="img-container">
      <img  className="image" src={img}/>
      </div>
      <div className="text-container">
      <p className="card-name">{name}</p>
      <p>ABV: {abv}</p>
      <p>IBU: {ibu}</p>
      <Link
        to={'/' + id}
        key={id}
        style={{ textDecoration: "none" }}>
        <button className="pair-btn">More about this brew</button>
      </Link>
      </div>
    </article>
  )

}

export default Card

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  abv: PropTypes.number,
  ibu: PropTypes.number,
};