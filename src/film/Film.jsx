import React from 'react'
import './Film.css'
import img from '../assets/film.svg'

const Film = ({
    filmName,
    rating,
    description
}) => {
  return (
    <div className='film'>
        <img src={img}></img>
        <p className='name'>{filmName}</p>
        <div className='rate'>
          <p className='rating'>Оценка</p>
          <div className='rate-rect'>{rating}</div>
        </div>
        <p className='descr'>{description}</p>
      </div>
  )
}

export default Film