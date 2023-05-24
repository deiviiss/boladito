import React from 'react'
import './App.css'

//! Create folder Layout and move next code to a MainLayout
import NavBar from './components/NavBar.jsx'
import Carousel from './components/Carousel.jsx'
import { slides } from './utils/slides.js'

export default function App () {
  return (
    <>
      <NavBar />
        <Carousel autoSlide={ false } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <image key={slide.id} src={slide.url} alt={slide.url} />
            // <img key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>
    </>
  )
}
