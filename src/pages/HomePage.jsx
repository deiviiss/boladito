import { NavLink } from 'react-router-dom'
import iconFacebook from '../assets/icons/Facebook.svg'
import iconInstagram from '../assets/icons/Instagram.svg'
import iconTiktok from '../assets/icons/Tiktok.svg'
import iconTwitter from '../assets/icons/Twitter.svg'
import iconYoutube from '../assets/icons/Youtube.svg'
import Carousel from '../components/Carousel.jsx'
import Product from '../components/Product.jsx'
import SlideButtons from '../components/SlidesButtons.jsx'
import { useProducts } from '../context/productsContext.jsx'
import ProductsActiveLayout from '../layout/ProductsActiveLayout.jsx'
import { slides } from '../utils/slides.js'

export default function HomePage () {
  const { raffles } = useProducts()

  return (
    <>
      {/* <form className='flex justify-center items-center h-[42px] bg-secondary'>
        <input type="search" name='' id='' className='min-w-[350px] h-[27px] rounded-lg' />
      </form> */}

      <Carousel autoSlide={ true } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <img className='w-full min-w-full h-[300px] object-cover'key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>

      <ProductsActiveLayout>
        {raffles.map((raffle) => {
          return <Product key={raffle.product.productId} product={raffle.product} raffleAt={raffle.raffleAt}/>
        })}
      </ProductsActiveLayout>

      <div className="flex justify-center w-full h-9 gap-6 my-3 relative">
        <SlideButtons slides={[1, 2, 3, 4]} />
      </div>

      <ul className='flex justify-center gap-4'>
        <li>
          <NavLink to="/">
            <img
                className='h-[30px]'
                src={iconTiktok}
                alt="icono de buscar"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
                className='h-[30px]'
                src={iconYoutube}
                alt="icono de buscar"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
                className='h-[30px]'
                src={iconInstagram}
                alt="icono de buscar"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
                className='h-[30px]'
                src={iconTwitter}
                alt="icono de buscar"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
                className='h-[30px]'
                src={iconFacebook}
                alt="icono de buscar"
            />
          </NavLink>
        </li>
      </ul>

    </>
  )
}
