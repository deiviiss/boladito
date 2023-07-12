import PropTypes from 'prop-types'
import { useState, createContext, useContext, useEffect } from 'react'

import { getProductsRequest } from '../services/api/productsRequest'
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
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [raffles, setRaffles] = useState([])

  useEffect(() => {
    getInitData()
  }, [])

  // should be private
  const getInitData = async () => {
    const products = await getProductsRequest()
    const raffles = await getRafflesRequest()

    products && setProducts(products)
    raffles && setRaffles(raffles)
  }

  const addTicketCart = (ticket) => {
    const existingProduct = cart.find((product) => product.productId === ticket.productId)

    if (existingProduct) {
      const updatedcart = cart.map((product) => {
        if (product.productId === ticket.productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
            total: product.total + ticket.price
          }
        }
        return product
      })
      setCart(updatedcart)
      return
    }

    const newProduct = {
      ...ticket,
      quantity: 1,
      total: ticket.price
    }
    setCart([...cart, newProduct])
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
      addTicketCart,
      removeTicketFromCart,
      getCartItemCount,
      products,
      raffles,
      findRaffleByProductId
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
