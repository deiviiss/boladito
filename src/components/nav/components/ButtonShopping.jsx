import React from 'react'
import iconoShopping from '../images/CARRITO.svg'
import '../style/nav.css'

export default function ButtonShopping () {
  return (
    <img
      className='ButtonShopping ButtonNav'
      src={ iconoShopping }
      alt="icono de search"
    />
  )
}