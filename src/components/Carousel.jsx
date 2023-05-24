import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// const Wrapper = styled.div`
//   position: relative;
//   background-color: #6343AE;
//   // min-width: 80%; // en el diseño no se sabe donde se acaba el carousel
//   // margin: auto; // no se sabe donde acaba
//   overflow: hidden;
//   height: 500px; // En la guia no se sabe el alto en px
// `
// const SlideWrapper = styled.div`
//   display: flex;
//   transition: transform 500ms ease-out;
//   transform: translateX(-${({ curr }) => curr * 100}%);
// `
// const SlideButton = styled.button`
//   padding: 10px;
//   background-color: transparent;
//   color: #fff;
//   border:none;
//   cursor: pointer;
//   transition: background-color 200ms ease-out;
//   &:hover {
//     color: #432b9b;
//   }
// `
// const PrevButton = styled(SlideButton)`
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
// `
// const NextButton = styled(SlideButton)`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
// `
// const SlideDot = styled.button`
//   transition: all 200ms ease-out;
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: ${({ active }) => (active ? '#fff' : '#432b9b')};
//   margin: 0 4px;
//   cursor: pointer;
//   border: none;
//   padding: 0;
// `
const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 4000 }) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    let slideInterval
    if (autoSlide) {
      slideInterval = setInterval(() => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
      }, autoSlideInterval)
    }
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, slides.length])

  return (
    <div>
      <div >{slides}</div>
      <button curr={curr} onClick={prev}>
        <IoIosArrowBack size={24} />
      </button>
      <button onClick={next}>
        <IoIosArrowForward size={24} />
      </button>
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        {slides.map((_, i) => (
          <button key={i} active={i === curr} onClick={() => setCurr(i)} />
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.array,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number
}

export default Carousel
