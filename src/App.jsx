import React from 'react'
import './App.css'

//! Create folder Layout and move next code to a MainLayout
import NavBar from './components/NavBar.jsx'
import Carousel from './components/Carousel.jsx'
import { slides } from './utils/slides.js'
import styled from 'styled-components'
const SlideImage = styled.img`
  width: 100%;
  min-width: 100%;
  height: 500px; // En la guia no se sabe el alto en px
  object-fit: cover;
`

export default function App () {
  return (
    <>
      <NavBar />
        <Carousel autoSlide={ false } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <SlideImage key={slide.id} src={slide.url} alt={slide.url} />
            // <img key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>
    </>
  )
}
