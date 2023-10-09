import React from 'react'
import Film from './film/film'
import { useState } from 'react'

const Films = () => {
  const [films, setFilms] = useState([])

  const [filmNameField, setFilmNameField] = useState('')
  const [filmRatingField, setFilmRatingField] = useState('')
  const [filmDescriptionField, setFilmDescriptionField] = useState('')

  return (
    <>
    <div className='form'>
      <input type='text' value={filmNameField} onChange={(e) => {setFilmNameField(e.target.value)}} />
      <input type='text' value={filmRatingField} onChange={(e) => {setFilmRatingField(e.target.value)}} />
      <input type='text' value={filmDescriptionField} onChange={(e) => {setFilmDescriptionField(e.target.value)}} />
      <button onClick={() => {
        if (filmNameField == '' || filmRatingField == '' || filmDescriptionField == ''){
        return
      }
      setFilms((prev) => {
        return prev.concat({
            filmName: filmNameField,
            rating: filmRatingField,
            description: filmDescriptionField
        })
    })
  }}>Добавить</button>
    </div>
    <div className='films'>
                {
                    films.map((item) => {
                        return <Film filmName={item.filmName} description={item.description} rating={item.rating} />
                    })
                }
            </div>
      </>
  )
}

export default Films