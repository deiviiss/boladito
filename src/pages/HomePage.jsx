import Carousel from '../components/Carousel.jsx'
import Product from '../components/Product.jsx'
import ProductsActiveLayout from '../layout/ProductsActiveLayout.jsx'
import { slides } from '../utils/slides.js'

//! fake data
const products = [
  {
    product_id: 1,
    name: 'Xtreme PC GeForce',
    url: 'https://http2.mlstatic.com/D_NQ_NP_941710-MLM51863601032_102022-O.webp',
    description: 'Rtx 2060 13Gb I5 16 Gb 500Gb Monitor 144hz',
    like: false,
    price: 100,
    rifaDate: new Date('2023-06-01')
  },
  {
    product_id: 2,
    name: 'Teclado gamer Game Factor',
    url: 'https://m.media-amazon.com/images/I/61JhIy5rXLL.__AC_SX300_SY300_QL70_ML2_.jpg',
    description: 'KBG400 QUERTY KRED Blue español España color negro',
    like: true,
    price: 10,
    rifaDate: new Date('2023-09-02')
  },
  {
    product_id: 3,
    name: 'Audifonos gamer',
    url: 'https://www.cyberpuerta.mx/img/product/XL/CP-CORSAIR-CA-9011215-NA-1.jpg',
    description: 'Corsair HS50 carbon',
    like: false,
    price: 10,
    rifaDate: new Date('2023-11-03')
  },
  {
    product_id: 4,
    name: 'Monitor Gamer Samsung Odyssey',
    url: 'https://www.cyberpuerta.mx/img/product/XL/CP-SAMSUNG-LS24AG320NLXZX-9dbcda.jpg',
    description: 'G3 F24G35TLCD 24" negro 100V/240V',
    like: false,
    price: 30,
    rifaDate: new Date('2024-05-15')
  }
]

export default function HomePage () {
  return (
    <>
      <Carousel autoSlide={ true } autoSlideinterval={4000}>
        {[
          ...slides.map((slide) => (
            <img className='w-full min-w-full h-[150px] object-cover'key={slide.id} src={slide.url} alt={slide.url} />
          ))
        ]}
      </Carousel>

      <ProductsActiveLayout>
        {products.map((product) => (
          <Product key={product.product_id} product={product}/>
        ))}
      </ProductsActiveLayout>
    </>
  )
}
