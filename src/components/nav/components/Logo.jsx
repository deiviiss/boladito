import React from 'react'
import LOGO from '../images/LOGO.svg'
import '../style/nav.css'

export default function LogoBoladito () {
	return (
    <img
      className='logoBoladito'
      src={ LOGO }
      alt="logo bolaito"
    />
  )
}