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
  const [cartTickets, setCartTickets] = useState([])
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

  const addTicketCart = (ticket) => setCartTickets([...cartTickets, ticket])

  // busca las rifas en el arreglo de rifas local, considerar la posibilidad que esta busqueda sea en la api para aprovechar la disponibilidad de boletos.
  // const findRaffleByProductId = (productId) => {
  //   const raffle = getRaffleByProductIdRequest(productId)

  //   return raffle
  // }
  const findRaffleByProductId = (productId) => {
    for (const raffle of raffles) {
      if (raffle.product.productId === parseInt(productId)) {
        return raffle
      }
    }
    return null // Si no se encuentra la rifa, se puede manejar el caso según la lógica
  }

  return (
    <ProductsContext.Provider value={{
      cartTickets,
      addTicketCart,
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
