import { NavLink } from 'react-router-dom'
import cantBoletos from '../assets/icons/ButtonCantBoletos.svg'
import iconShopping from '../assets/icons/CARRITO.svg'
import ProductCart from '../components/ProductCart'
import { useProducts } from '../context/productsContext'

const CheckoutPage = () => {
  const { cartTickets, getCartItemCount } = useProducts()

  const sumTotalToPay = () => {
    const sum = cartTickets.reduce((accumulator, product) => {
      const productTotal = product.price * product.quantity
      return accumulator + productTotal
    }, 0)

    return sum
  }

  return (
    <div className='flex flex-col m-2 gap-3'>
      <div className='bg-[#FF7300] flex items-center justify-between rounded-lg text-3xl text-white p-3'>
        <div className='flex items-center gap-1'>
          <img
              className='h-[30px]'
              src={iconShopping}
              alt="icono de carrito"
        />
          <h1>Carrito</h1></div>
      </div>
      {
        cartTickets.map((product) => <ProductCart key={product.productId} product={product} />)
      }
      {
        cartTickets.length > 0
          ? <div className='flex flex-col items-end gap-3'>
            <div className="flex gap-2">
              <h2 className='text-lg'>N° Boletos</h2>
              <div className='w-16 rounded-md bg-white text-center  justify-center border shadow-md'>
                <h2 className='font-bold text-[#805C14]'>{getCartItemCount()}</h2>
              </div>
            </div>

            <p className='text-lg font-bold'>Total: <span className='font-bold text-xl text-quaternary'>${sumTotalToPay()}.00</span></p>

          </div>
          : <div className='flex flex-col justify-center items-center'>
            <p className='text-lg font-bold'><span className='font-bold text-xl text-quaternary'>Inicia un carrito de compras</span></p>
            <NavLink to={'/'} className='hover:underline'>
              Descubre nuevas rifas
            </NavLink>
          </div>
      }
    </div>
  )
}

export default CheckoutPage
