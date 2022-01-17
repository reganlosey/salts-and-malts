import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ id, name, abv, ibu }) => {
  return (
    <article className="beer-card" key={id}>
      <p>{name}</p>
      <p>abv: {abv}</p>
      <p>ibu: {ibu}</p>
      <div className="info-container">
        <Link
          className="info-link"
          to={'/' + id}
          key={id}
          style={{ textDecoration: "none" }}>
          see the salts that pair with this malt
          <img className="beer-icon"
            src="https://www.svgrepo.com/show/149438/pint-of-beer.svg" />
        </Link>
      </div>
    </article>
  )

}

export default Card

Card.propTypes = {
  id :PropTypes.number.isRequired,
  name :PropTypes.string,
  abv :PropTypes.number,
  ibu :PropTypes.number,
};