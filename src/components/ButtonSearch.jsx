import React from 'react'
import iconoSearch from '../images/BUSCAR.svg'
import '../style/nav.css'

export default function ButtonSearch () {
  return (
    <img
        className='ButtonSearch ButtonNav'
        src={ iconoSearch }
        alt="icono de search"
    />
  )
}
