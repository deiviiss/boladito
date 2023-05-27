import styled from 'styled-components'
import Carousel from '../components/Carousel.jsx'
import Product from '../components/Product.jsx'
import { slides } from '../utils/slides.js'
const SlideImage = styled.img` 
`

const products = [
  {
    product_id: 1,
    name: 'Smartphone X-Plus',
    url: 'https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/981001211m.jpg',
    description: 'Un dispositivo potente y elegante para todas tus necesidades.'
  },
  {
    product_id: 2,
    name: 'Auriculares inalámbricos Z-Tech',
    url: 'https://globaloffice.com.mx/img/CT/93385451-3807309260.jpg',
    description: 'Sumérgete en un sonido envolvente sin cables ni limitaciones.'
  }
]

const ProductsActive = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-[10px] gap-[10px] mr-[7.5px] ml-[7.5px]">
        {products.map((product) => (
          <Product key={product.product_id} product={product}/>
        ))}
      </div>
    </>
  )
}

export default function HomePage () {
  return (
    <>
      <Carousel autoSlide={ true } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <SlideImage className='w-full min-w-full h-[150px] object-cover'key={slide.id} src={slide.url} alt={slide.url} />
            // <img key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>

      <ProductsActive></ProductsActive>

    </>
  )
}
