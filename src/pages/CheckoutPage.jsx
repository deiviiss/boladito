import React from 'react'
import ProductCart from '../components/ProductCart'
import { useProducts } from '../context/productContext'

const CheckoutPage = () => {
  const { cartProducts } = useProducts()
  const uniqueProducts = {}

  cartProducts.forEach((product) => {
    const { product_id: productId } = product

    if (!uniqueProducts[productId]) {
      uniqueProducts[productId] = {
        ...product,
        quantity: 0,
        total: 0
      }
    }

    uniqueProducts[productId].quantity += 1
    uniqueProducts[productId].total = product.price * uniqueProducts[productId].quantity
  })

  const productsWithTotalAndQuantity = Object.values(uniqueProducts)

  const sumTotalToPay = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cartProducts.reduce(reducer, 0)

    return sum
  }

  return (
    <>
      <div className="flex justify-between p-3">
        <h1 className='font-bold text-lg'>Carrito</h1>
        <p className='text-lg px-4'>$ {sumTotalToPay()}</p>
      </div>
      {
        productsWithTotalAndQuantity.map((product, index) => <ProductCart key={index} product={product} />)
      }

    </>
  )
}

export default CheckoutPage
