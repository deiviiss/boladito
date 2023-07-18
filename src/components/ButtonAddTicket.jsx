import PropTypes from 'prop-types'
import { useProducts } from '../context/productsContext'

const ButtonAddTicket = ({ product }) => {
  const { addToCart } = useProducts()

  // debería de consultar la api para saber cuantos boletos quedan, ya tengo la raffle a la cual corresponde tal producto. ahora se tiene que checar disponibilidad
  const handleClick = (e) => {
    e.stopPropagation()
    // ? se exhiben productos, se venden boletos.
    addToCart(product)
  }
  return (
    <div className='flex items-center justify-center rounded-full bg-secondary w-6 h-6 min-w-[24px] border border-[#b795ff] text-white text-xl text-center'>
      <button onClick={(e) => handleClick(e)}>
        +
      </button>
    </div>
  )
}

ButtonAddTicket.propTypes = {
  product: PropTypes.object.isRequired
}

export default ButtonAddTicket
