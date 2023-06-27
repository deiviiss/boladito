import PropTypes from 'prop-types'
import { useState, createContext, useContext } from 'react'

const FiltersContext = createContext()

export const useFilters = () => {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters debe ser utilizado dentro de un ProviderFilters')
  }

  return context
}

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      filterProducts
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired
}
