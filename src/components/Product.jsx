import PropTypes from 'prop-types'
import { useState } from 'react'
import ButtonAddTicket from './ButtonAddTicket'
import TimeRifa from './TimeRifa'
import Modal from '../common/Modal'
import { useProducts } from '../context/productsContext'

export default function Product ({ product }) {
  const { findRaffleByProductId } = useProducts()
  const raffle = findRaffleByProductId(product.productId)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)} className=" w-full bg-white p-[7px] text-[8px] flex flex-col justify-between border-2  overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md mx-auto">

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

          <ButtonAddTicket product={product} />
        </div>

      </div>
      {
        isOpen && <Modal isOpen={false} setIsOpen={setIsOpen} title={'Boletos'}>

          <div className="flex flex-col gap-4">
            <h2>Aqui va el detalle del producto</h2>
            <div className='bg-[#A9064B] flex items-center justify-center rounded-lg text-2xl text-white p-1 w-full'>
              <button onClick={() => setIsOpen(false)}>Pagar</button>
            </div>
          </div>
        </Modal>
      }
    </>

  )
}
Product.propTypes = {
  product: PropTypes.object
}
