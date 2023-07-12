import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import iconArrowDownd from '../assets/icons/ButtonCantBoletos.svg'
import { useProducts } from '../context/productsContext'

const SelectQuantity = ({ options = [], product = {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, setCart } = useProducts()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (option) => {
    const newQuantity = parseInt(option.value)
    setIsOpen(false) // Cerrar el desplegable después de seleccionar una opción

    const updatedProduct = {
      ...product,
      quantity: newQuantity
    }

    const updatedcart = cart.map(ticket => {
      if (ticket.productId === product.productId) {
        return updatedProduct
      }
      return ticket
    })

    setCart(updatedcart)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex mx-1 gap-1 text-center" onClick={handleToggle}>
        <p className='w-4 h-5 rounded bg-white text-quaternary border shadow-md'>{product.quantity}</p>
        <img src={iconArrowDownd} alt="arrowDown" width={'20px'} />
      </div>
      {isOpen && (
        <ul className="absolute overflow-hidden w-10 mt-1 text-end right-3 bg-white border rounded">
          {options.map((option) => (
            <li
                className='px-2 hover:bg-primary hover:text-white'
                key={option.value}
                onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectQuantity

SelectQuantity.propTypes = {
  options: PropTypes.array,
  product: PropTypes.object
}
