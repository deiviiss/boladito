import PropTypes from 'prop-types'
import { useState, createContext, useContext, useEffect } from 'react'
import { getRafflesRequest } from '../services/api/rafflesRequest'

const ProductsContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProducts debe ser utilizado dentro de un ProductsProvider')
  }

  return context
}

export const ProductsProvider = ({ children }) => {
  const initialCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  const [cart, setCart] = useState(initialCart)
  const [raffles, setRaffles] = useState([])
  const [confirmedPurchase, setConfirmedPurchase] = useState(false)

  useEffect(() => {
    getInitData()
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // should be private
  const getInitData = async () => {
    const raffles = await getRafflesRequest()

    raffles && setRaffles(raffles)
  }

  const addToCart = product => {
    // check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.productId === product.productId)

    // product is already in the cart
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      newCart[productInCartIndex].total += newCart[productInCartIndex].price

      return setCart(newCart)
    }

    // product is not already in the cart

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1,
        total: product.price
      }
    ]))
  }

  const removeTicketFromCart = (productId) => {
    const updatedcart = cart.filter((ticket) => ticket.productId !== productId)
    setCart(updatedcart)
  }

  const findRaffleByProductId = (productId) => {
    for (const raffle of raffles) {
      if (raffle.product.productId === parseInt(productId)) {
        return raffle
      }
    }
    return null // Si no se encuentra la rifa, se puede manejar el caso según la lógica
  }

  // Función para obtener el número total de boletos en el carrito
  const getCartItemCount = () => {
    const cartItemCount = cart.reduce((total, ticket) => total + ticket.quantity, 0)
    return cartItemCount
  }

  return (
    <ProductsContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeTicketFromCart,
      getCartItemCount,
      raffles,
      findRaffleByProductId,
      confirmedPurchase,
      setConfirmedPurchase
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
