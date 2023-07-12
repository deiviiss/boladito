import PropTypes from 'prop-types'
import ButtonAddTicket from './ButtonAddTicket'
import TimeRifa from './TimeRifa'
import { useProducts } from '../context/productsContext'

export default function Product ({ product }) {
  const { addTicketCart, findRaffleByProductId } = useProducts()
  const raffle = findRaffleByProductId(product.productId)

  // ? se exhiben productos, se venden boletos.
  const handleClick = (product) => {
    // debería de consultar la api para saber cuantos boletos quedan, ya tengo la raffle a la cual corresponde tal producto. ahora se tiene que checar disponibilidad
    addTicketCart(product)
  }

  return (
    <div className=" w-full bg-white p-[7px] text-[8px] flex flex-col justify-between border-2  overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md mx-auto">

      <div className=" w-full flex flex-col items-center absolute -left-16 bg-[#D7E34B] -rotate-45">
        <h1 className=' text-sm font-bold'>${product.price}</h1>
      </div>

      <TimeRifa raffleDate={raffle.raffleAt} ></TimeRifa>

      <div className="flex justify-center p-3">
        <img className='w-[100px] object-cover' src={product.url} alt="product" />
      </div>

      <div className="flex justify-between items-center gap-1">
        <div className="">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>

        <ButtonAddTicket handleClick={handleClick} product={product} />
      </div>
    </div>
  )
}
Product.propTypes = {
  product: PropTypes.object
}
