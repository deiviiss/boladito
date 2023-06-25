import PropTypes from 'prop-types'
import TimeRifa from './TimeRifa'
import { useProducts } from '../context/productContext'

export default function ProductCart ({ product }) {
  const { addProductCart } = useProducts()

  const handleClick = (product) => {
    addProductCart(product)
  }

  return (
    <div className="w-[300px] h-[158px] bg-white p-[7px] text-[7px] flex flex-col justify-between border-2  overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md mx-auto">

      <div className="w-full flex flex-col items-center absolute -left-32 bg-[#D7E34B] -rotate-45">
        <p className=' text-sm font-bold'>${product.price}</p>
        <p className='text-[10px'>Por boleto</p>
      </div>

      <div className='flex justify-center items-center gap-3 h-full mx-auto'>

        <div className="flex flex-col justify-center items-center gap-4">
          <img className='w-full h-20 object-cover' src={product.url} alt="product" />
          <TimeRifa rifaDate={product.rifaDate} ></TimeRifa>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-full h-auto">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h1>{product.quantity}</h1>
            <p>$  {product.total}</p>
          </div>

          <div className='flex items-center justify-center rounded-full bg-[#00402F] w-5 h-5 border-2 border-[#00BF8E] text-white text-xl text-center'>
            <button onClick={() => handleClick(product)}>
              +
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
ProductCart.propTypes = {
  product: PropTypes.object
}
