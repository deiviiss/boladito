import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import iconBoleto from '../assets/icons/Boleto.svg'
import { useProducts } from '../context/productsContext'

const SelectTicketsPage = () => {
  const { cart, confirmedPurchase, setConfirmedPurchase } = useProducts()

  // setConfirmedPurchase(true)
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

        {/* {
          cart.map((product) => <ProductCart key={product.productId} product={product} />)
        } */}

      </div>

    </>

  )
}

export default SelectTicketsPage
