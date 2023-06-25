import PropTypes from 'prop-types'
import TimeRifa from './TimeRifa'
import { useProducts } from '../context/productContext'
// import iconLike from '../assets/icons/LIKE.svg'
// import iconNoLike from '../assets/icons/NOLIKE.svg'

export default function Product ({ product }) {
  const { addProductCart } = useProducts()

  const handleClick = (product) => {
    addProductCart(product)
  }

  return (
    <div className="w-[175px] h-[158px] bg-white p-[7px] text-[7px] flex flex-col justify-between border-2  overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md mx-auto">

      <div className=" w-full flex flex-col items-center absolute -left-16 bg-[#D7E34B] -rotate-45">
        <p className=' text-sm font-bold'>${product.price}</p>
        <p className='text-[10px'>Por boleto</p>
      </div>

      <TimeRifa rifaDate={product.rifaDate} ></TimeRifa>

      <div className="flex justify-center">
        <img className='w-[100px] h-[58px] object-cover' src={product.url} alt="product" />
      </div>

      <div className="flex">
        <div className="w-[150px] h-[25px]">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>

        {/* <button>
          {product.like ? <img src={ iconLike } alt="like" className='w-[20px]' /> : <img src={ iconNoLike } alt="no like" className='w-[20px]' /> }
        </button> */}

        <div className='flex items-center justify-center rounded-full bg-[#00402F] w-5 h-5 border-2 border-[#00BF8E] text-white text-xl text-center'>
          <button onClick={() => handleClick(product)}>
            +
          </button>
        </div>

      </div>
    </div>
  )
}
Product.propTypes = {
  product: PropTypes.object
}
