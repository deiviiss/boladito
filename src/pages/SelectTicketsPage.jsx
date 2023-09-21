import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import iconBoleto from '../assets/icons/Boleto.svg'
import { useProducts } from '../context/productsContext'
import TicketSelect from '../components/TicketSelect'

const SelectTicketsPage = () => {
  const { cart, confirmedPurchase, setConfirmedPurchase } = useProducts()

  const navigate = useNavigate()

  useEffect(() => {

    // Verificar si el usuario ha confirmado la compra en la página de checkout
    if (!confirmedPurchase) {
      // Redirigir al usuario de vuelta a la página de checkout o mostrar un mensaje de error
      navigate('/checkout')
    }

    return () => {
      setConfirmedPurchase(false)
    }
  }, [confirmedPurchase, navigate, setConfirmedPurchase])

  return (
    <>
      <div className='flex flex-col m-2 gap-3 dark'>
        {
          cart.length > 0
            ? <div className='bg-[#A9064B] flex items-center justify-between rounded-lg text-3xl text-white p-3'>
              <div className='flex items-center gap-2'>
                <img
                  className='h-[30px]'
                  src={iconBoleto}
                  alt="icono de carrito"
                />
                <h1>Boletos</h1>
              </div>
            </div>
            : null
        }

        {
          cart.map((product) => <TicketSelect key={product.productId} product={product} />)
        }

        <div className='flex flex-col items-end gap-3'>

          <div className="flex gap-2">
            <h2 className='text-lg'>N° Boletos</h2>
            <div className='w-16 rounded-md bg-white text-center  justify-center border shadow-md'>
              <h2 className='font-bold text-[#805C14]'>###</h2>
            </div>
          </div>

          <p className='text-lg font-bold'>Total: <span className='font-bold text-xl text-quaternary'>$.00</span></p>


        </div>

        <button onClick={() => handleClickNext()} className='bg-[#A9064B] hover:bg-[#A9064Bd4] flex items-center justify-center rounded-lg text-2xl text-white p-1 w-full'>
          Siguiente
        </button>

      </div>

    </>

  )
}

export default SelectTicketsPage
