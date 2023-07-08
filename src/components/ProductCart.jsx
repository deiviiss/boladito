import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TimeRifa from './TimeRifa'
import ButtonClose from '../assets/icons/ButtonClose.svg'
import iconMessenger from '../assets/icons/Messenger.svg'
import RelojEnvio from '../assets/icons/RelojEnvio.svg'
import iconTelegram from '../assets/icons/Telegram.svg'
import iconWhatsApp from '../assets/icons/WhatsApp.svg'
import { useProducts } from '../context/productsContext'

export default function ProductCart ({ product }) {
  const { findRaffleByProductId, cartTickets, setCartTickets, removeTicketFromCart } = useProducts()

  const raffle = findRaffleByProductId(product.productId)

  const remainingTickets = raffle.remainingTickets - product.quantity

  const handleQuantitySelectedChange = event => {
    const newQuantity = parseInt(event.target.value)

    const updatedProduct = {
      ...product,
      quantity: newQuantity
    }

    const updatedCartTickets = cartTickets.map(ticket => {
      if (ticket.productId === product.productId) {
        return updatedProduct
      }
      return ticket
    })

    setCartTickets(updatedCartTickets)
  }

  return (
    <>
      <div className='bg-white p-3 text-[12px] flex flex-col justify-between border-2 overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md'>

        <div className='absolute -right-1 -top-0 w-6 z-10 cursor-pointer'>
          <img src={ButtonClose} alt='cerrar' onClick={() => removeTicketFromCart(product.productId)} />
        </div>

        <div className='w-[100px] flex flex-col items-center absolute -left-8 bg-[#FF7300] text-white -rotate-45'>
          <p className=' text-base font-semibold'>${product.price}</p>
        </div>

        <div className='grid grid-cols-2 justify-center items-center h-full mx-auto gap-3'>

          <div className='flex flex-col justify-center items-center mx-auto'>
            <img className='w-full h-20 object-cover' src={product.url} alt='product' />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='w-full h-auto font-bold text-xs'>
              <h1 className='font-normal text-[10px] text-[#B9C6C4]'>ID#{raffle.raffleId}</h1>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <div className='flex items-center text-[10px] font-normal'>
                <span className='font-normal'>Cantidad:</span>
                <select className='w-12' name='quantity' id='quantity' onChange={handleQuantitySelectedChange}>
                  <option value={product.quantity}>{product.quantity}</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>

                <span className='font-light text-[7px]'>({remainingTickets} disponibles)</span>
              </div>
              <TimeRifa raffleDate={raffle.raffleAt} />

            </div>

            <div className='flex justify-center items-center gap-1'>
              <img width={13} src={RelojEnvio}></img><p className='text-[9px]'>  Comparte para acelerar el sorteo</p>
            </div>
            <ul className='flex justify-center items-center gap-1'>
              <li>
                <Link to={'/checkout'}>
                  <img
                      className='h-4'
                      src={iconMessenger} alt='icono de messenger' />
                </Link>
              </li>
              <li>
                <Link to='/checkout'>
                  <img
                      className='h-4'
                      src={iconWhatsApp}
                      alt='icono de whatsapp'
                  />
                </Link>
              </li>
              <li>
                <Link to='/checkout'>
                  <img
                      className='h-4'
                      src={iconTelegram}
                      alt='icono de telegram'
                  />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
ProductCart.propTypes = {
  product: PropTypes.object
}
