import PropTypes from 'prop-types'
import ButtonAddTicket from './ButtonAddTicket'
import TimeRifa from './TimeRifa'
import { useProducts } from '../context/productsContext'

export default function ProductCart ({ product, raffleAt }) {
  const { addTicketCart } = useProducts()

  const handleClick = (product) => {
    addTicketCart(product)
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
          <TimeRifa rifaDate={raffleAt} ></TimeRifa>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-full h-auto">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h1>{product.quantity}</h1>
            <p>$ {product.total}</p>
          </div>

          <ButtonAddTicket handleClick={handleClick} product={product} />
        </div>

      </div>
    </div>
  )
}
ProductCart.propTypes = {
  product: PropTypes.object,
  raffleAt: PropTypes.any
}
