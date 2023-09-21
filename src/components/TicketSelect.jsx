import PropTypes from 'prop-types'
import { useProducts } from '../context/productsContext'
import { useEffect } from 'react'
import { useState } from 'react'

export default function TicketSelect ({ product }) {
  const { findRaffleByProductId, getTicketsByRaffleId } = useProducts()
  const [tickets, setTickets] = useState([])

  const raffle = findRaffleByProductId(product.productId)
  // const remainingTickets = raffle.remainingTickets - product.quantity


  useEffect(() => {

    const tickets = getTicketsByRaffleId(raffle.raffleId)
    console.log(tickets)

    tickets && setTickets(tickets)
  }, [])
  return (
    <>
      <div className='bg-white p-2 text-[12px] flex flex-col justify-between border-2 overflow-hidden relative rounded-tl-2xl rounded-tr-none rounded-br-2xl shadow-md'>

        <div className='w-[100px] flex flex-col items-center absolute -left-6 top-3 bg-[#A9064B] text-white -rotate-45'>
          <p className='text-sm font-semibold'>Boletos</p>
        </div>

        <div className='grid grid-cols-2 justify-center items-center h-full mx-auto gap-3'>

          <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
            <div className="flex items-end justify-end w-full">
              <h1 className='font-normal text-[10px] text-[#708481]'>ID#{raffle.raffleId}</h1>
            </div>
            <img className='w-full h-28 object-cover mt-5' src={product.url} alt='product' />

            <div className='my-1'>
              <h1 className='font-bold text-[11px]'>{product.name}</h1>
              <p className='font-bold text-[10px]'>{product.description}</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center mb-2 h-16'>
              <span className='bg-[#A9064B] w-4 h-8 rounded-tl rounded-bl mx-2'></span>
              <p className='flex justify-center bg-[#A9064B] w-full py-2 px-3 text-white'>801 - 825</p>
              <span className='bg-[#A9064B] w-4 h-8 rounded-tr rounded-br m-2'></span>
            </div>
            <div className="grid grid-cols-5">
              {
                tickets.map(ticket => (
                  <p key={ticket.ticket_id} className='p-1 border m-1'>{ticket.number}</p>
                ))
              }
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
TicketSelect.propTypes = {
  product: PropTypes.object
}