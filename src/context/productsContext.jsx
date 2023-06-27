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
  const [cartProducts, setCartProducts] = useState([])
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

  const addProductCart = (product) => setCartProducts([...cartProducts, product])

  // productos en rifa
  //! FEATURE use filter
  const rifaProducts = products

  return (
    <ProductsContext.Provider value={{
      rifaProducts,
      cartProducts,
      setCartProducts,
      addProductCart,
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
