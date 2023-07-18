import Filters from '../components/Filters'
import Product from '../components/Product'
import { useFilters } from '../context/filtersContext'
import { useProducts } from '../context/productsContext'
import ProductsListLayout from '../layout/ProductsListLayout'

export const ProductsPage = () => {
  const { raffles } = useProducts()
  const { filterProducts } = useFilters()

  const products = raffles.map(raffle => raffle.product)

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Filters />

      <ProductsListLayout>
        {
          filteredProducts.map((product, index) => (
            <Product key={index} product={product}/>
          ))
        }
      </ProductsListLayout>
    </>

  )
}
