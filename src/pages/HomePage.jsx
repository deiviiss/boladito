import Carousel from '../components/Carousel.jsx'
import Product from '../components/Product.jsx'
import { useProducts } from '../context/productContext.jsx'
import ProductsActiveLayout from '../layout/ProductsActiveLayout.jsx'
import { slides } from '../utils/slides.js'

export default function HomePage () {
  const { rifaProducts } = useProducts()

  return (
    <>
      {/* <form className='flex justify-center items-center h-[42px] bg-secondary'>
        <input type="search" name='' id='' className='min-w-[350px] h-[27px] rounded-lg' />
      </form> */}

      <Carousel autoSlide={ true } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <img className='w-full min-w-full h-[150px] object-cover'key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>

      <ProductsActiveLayout>
        {rifaProducts.map((product) => (
          <Product key={product.product_id} product={product}/>
        ))}
      </ProductsActiveLayout>

    </>
  )
}
