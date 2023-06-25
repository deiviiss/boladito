import PropTypes from 'prop-types'
import { useState, createContext, useContext, useEffect } from 'react'

import { getProductsRequest } from '../services/api/productsRequest'

const ProductsContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProducts debe ser utilizado dentro de un ProviderProducts')
  }

  return context
}

export const ProviderProducts = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  // should be private
  const getProducts = async () => {
    const products = await getProductsRequest()

    if (products) {
      setProducts(products)
    }
  }

  const addProductCart = (product) => setCartProducts([...cartProducts, product])

  // productos en rifa
  //! FEATURE use filter
  const rifaProducts = products

  return (
    <ProductsContext.Provider value={{
      rifaProducts,
      cartProducts,
      setCartProducts,
      addProductCart
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

ProviderProducts.propTypes = {
  children: PropTypes.node.isRequired
}
