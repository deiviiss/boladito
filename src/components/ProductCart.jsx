import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TimeRifa from './TimeRifa'
import ButtonClose from '../assets/icons/ButtonClose.svg'
import iconMessenger from '../assets/icons/Messenger.svg'
import RelojEnvio from '../assets/icons/RelojEnvio.svg'
import iconTelegram from '../assets/icons/Telegram.svg'
import iconWhatsApp from '../assets/icons/WhatsApp.svg'
import SelectQuantity from '../common/SelectQuantity'
import { useProducts } from '../context/productsContext'

export default function ProductCart ({ product }) {
  const { findRaffleByProductId, removeTicketFromCart } = useProducts()

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ]

  const raffle = findRaffleByProductId(product.productId)

  const remainingTickets = raffle.remainingTickets - product.quantity

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
              <div className='flex items-center text-[10px] font-normal my-2'>
                <span className='font-normal'>Cantidad:</span>
                <div>
                  <SelectQuantity options={options} product={product} />
                </div>

                <span className='font-light text-[7px]'>({remainingTickets} disponibles)</span>
              </div>

              <div className="flex w-full items-center justify-center mt-2">
                <TimeRifa raffleDate={raffle.raffleAt} />
              </div>

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

// < div className = "relative w-10" >
//                 <select className='w-full h-full text-center absolute inset-0 cursor-pointer custom-select' name='quantity' id='quantity' onChange={handleQuantitySelectedChange}>
//                   <option value={product.quantity}>{product.quantity}</option>
//                   <option value='1'>1</option>
//                   <option value='2'>2</option>
//                   <option value='3'>3</option>
//                 </select>
//                 <span className="flex items-center justify-center absolute inset-0 w-4 border border-gray-300 rounded">{product.quantity}</span>
//               </ >
