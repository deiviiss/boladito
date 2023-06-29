import ProductCart from '../components/ProductCart'
import { useProducts } from '../context/productsContext'

const CheckoutPage = () => {
  const { cartTickets, findRaffleByProductId } = useProducts()

  const sumTotalToPay = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cartTickets.reduce(reducer, 0)

    return sum
  }

  // Crear el objeto diccionario para agrupar los productos iguales
  const groupedProducts = {}
  for (const ticket of cartTickets) {
    if (!groupedProducts[ticket.productId]) {
      groupedProducts[ticket.productId] = {
        ...ticket,
        quantity: 1,
        total: ticket.price
      }
    } else {
      groupedProducts[ticket.productId].quantity++
      groupedProducts[ticket.productId].total += ticket.price
    }
  }

  // Crear el arreglo final con los datos de la rifa y los productos agrupados
  const rafflesInCheckout = []
  for (const productId in groupedProducts) {
    const ticket = groupedProducts[productId]
    const raffle = findRaffleByProductId(productId)

    if (raffle) {
      rafflesInCheckout.push({
        ...raffle,
        product: {
          ...ticket,
          quantity: ticket.quantity,
          total: ticket.total
        }
      })
    }
  }

  return (
    <>
      <div className="flex justify-between p-3">
        <h1 className='font-bold text-lg'>Carrito</h1>
        <p className='text-lg px-4'>$ {sumTotalToPay()}</p>
      </div>
      {
        rafflesInCheckout.map((raffle, index) => <ProductCart key={index} product={raffle.product} raffleAt={raffle.raffleAt} />)
      }
    </>
  )
}

export default CheckoutPage
