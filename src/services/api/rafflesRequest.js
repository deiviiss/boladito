
const getRafflesRequest = async () => {
  const raffles = [
    {
      raffle_id: 1,
      name: 'Rifa de Accesorios Gamer',
      description: 'Rifa de accesorios para gamers',
      raffleAt: new Date('2023-06-01'),
      remainingTickets: 400,
      product: {
        productId: 1,
        name: 'Xtreme PC GeForce',
        url: 'https://http2.mlstatic.com/D_NQ_NP_941710-MLM51863601032_102022-O.webp',
        description: 'Rtx 2060 13Gb I5 16 Gb 500Gb Monitor 144hz',
        like: false,
        price: 100,
        category: 'pc'
      }
    },
    {
      raffle_id: 2,
      name: 'Rifa de PC Gamer',
      description: 'Rifa de una PC Gamer de última generación',
      raffleAt: new Date('2023-09-02'),
      remainingTickets: 900,
      product: {
        productId: 2,
        name: 'Teclado gamer Game Factor',
        url: 'https://m.media-amazon.com/images/I/61JhIy5rXLL.__AC_SX300_SY300_QL70_ML2_.jpg',
        description: 'KBG400 QUERTY KRED Blue español España color negro',
        like: true,
        price: 15,
        category: 'keyboards'
      }
    },
    {
      raffle_id: 3,
      name: 'Rifa de PC Gamer',
      description: 'Rifa de una PC Gamer de última generación',
      raffleAt: new Date('2023-11-03'),
      remainingTickets: 500,
      product: {
        productId: 3,
        name: 'Audifonos gamer',
        url: 'https://www.cyberpuerta.mx/img/product/XL/CP-CORSAIR-CA-9011215-NA-1.jpg',
        description: 'Corsair HS50 carbon',
        like: false,
        price: 10,
        category: 'earphones'
      }
    },
    {
      raffle_id: 4,
      name: 'Rifa de PC Gamer',
      description: 'Rifa de una PC Gamer de última generación',
      raffleAt: new Date('2023-09-02'),
      remainingTickets: 700,
      product: {
        productId: 4,
        name: 'Monitor Gamer Samsung Odyssey',
        url: 'https://www.cyberpuerta.mx/img/product/XL/CP-SAMSUNG-LS24AG320NLXZX-9dbcda.jpg',
        description: 'G3 F24G35TLCD 24" negro 100V/240V',
        like: false,
        price: 30,
        category: 'screens'
      }
    }
  ]

  return raffles
}

// al endpoint se le manda un productId y este devuelve un raffle del cual se puede sacar los boletos disponibles y los boletos apartados
const getRaffleByProductIdRequest = async (productId) => {
  console.log(`Se manda al endpoint el productId: ${productId} y este me devuelve la rifa`)
  const raffle = {
    raffle_id: 1,
    name: 'Rifa de Accesorios Gamer',
    description: 'Rifa de accesorios para gamers',
    raffleAt: new Date('2023-06-01'),
    remainingTickets: 400,
    apartedTickets: 0,
    product: {
      productId: 1,
      name: 'Xtreme PC GeForce',
      url: 'https://http2.mlstatic.com/D_NQ_NP_941710-MLM51863601032_102022-O.webp',
      description: 'Rtx 2060 13Gb I5 16 Gb 500Gb Monitor 144hz',
      like: false,
      price: 100,
      category: 'pc'
    }
  }

  return raffle
}

export { getRafflesRequest, getRaffleByProductIdRequest }
