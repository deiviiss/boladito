import React from 'react'
import iconoUser from '../images/USER.svg'
import '../style/nav.css'

export default function ButtonUser () {
  return (
    <img
      className='ButtonUser ButtonNav'
      src={ iconoUser }
      alt="icono de Usuario"
    />
  )
}