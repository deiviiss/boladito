
const getRafflesRequest = async () => {
  const raffles = [
    {
      raffleId: 872312678,
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
      raffleId: 872312679,
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
      raffleId: 872312680,
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
      raffleId: 872312681,
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
    raffleId: 872312678,
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

const getTicketsByRaffleIdRequest = (raffleId) => {

  let tickets = []

  if (raffleId === 872312678 || raffleId === 872312681) {
    tickets = [
      {
        "ticket_id": 1,
        "raffle_id": 872312679,
        "number": 801,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 2,
        "raffle_id": 872312679,
        "number": 802,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 3,
        "raffle_id": 872312679,
        "number": 803,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 4,
        "raffle_id": 872312679,
        "number": 804,
        "status": "vendido",
        "user_id": 1
      },
      {
        "ticket_id": 5,
        "raffle_id": 872312679,
        "number": 805,
        "status": "vendido",
        "user_id": 1
      },
      {
        "ticket_id": 6,
        "raffle_id": 872312679,
        "number": 806,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 7,
        "raffle_id": 872312679,
        "number": 807,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 8,
        "raffle_id": 872312679,
        "number": 808,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 9,
        "raffle_id": 872312679,
        "number": 809,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 10,
        "raffle_id": 872312679,
        "number": 810,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 11,
        "raffle_id": 872312679,
        "number": 811,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 12,
        "raffle_id": 872312679,
        "number": 812,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 13,
        "raffle_id": 872312679,
        "number": 813,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 14,
        "raffle_id": 872312679,
        "number": 814,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 15,
        "raffle_id": 872312679,
        "number": 815,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 16,
        "raffle_id": 872312679,
        "number": 816,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 17,
        "raffle_id": 872312679,
        "number": 817,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 18,
        "raffle_id": 872312679,
        "number": 818,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 19,
        "raffle_id": 872312679,
        "number": 819,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 20,
        "raffle_id": 872312679,
        "number": 820,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 21,
        "raffle_id": 872312679,
        "number": 821,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 22,
        "raffle_id": 872312679,
        "number": 822,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 23,
        "raffle_id": 872312679,
        "number": 823,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 24,
        "raffle_id": 872312679,
        "number": 824,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 25,
        "raffle_id": 872312679,
        "number": 825,
        "status": "disponible",
        "user_id": null
      }
    ]
  }

  if (raffleId === 872312679 || raffleId === 872312680) {
    tickets = [
      {
        "ticket_id": 1,
        "raffle_id": 872312679,
        "number": 701,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 2,
        "raffle_id": 872312679,
        "number": 702,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 3,
        "raffle_id": 872312679,
        "number": 703,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 4,
        "raffle_id": 872312679,
        "number": 704,
        "status": "vendido",
        "user_id": 1
      },
      {
        "ticket_id": 5,
        "raffle_id": 872312679,
        "number": 705,
        "status": "vendido",
        "user_id": 1
      },
      {
        "ticket_id": 6,
        "raffle_id": 872312679,
        "number": 706,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 7,
        "raffle_id": 872312679,
        "number": 707,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 8,
        "raffle_id": 872312679,
        "number": 708,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 9,
        "raffle_id": 872312679,
        "number": 709,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 10,
        "raffle_id": 872312679,
        "number": 810,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 11,
        "raffle_id": 872312679,
        "number": 711,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 12,
        "raffle_id": 872312679,
        "number": 712,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 13,
        "raffle_id": 872312679,
        "number": 713,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 14,
        "raffle_id": 872312679,
        "number": 714,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 15,
        "raffle_id": 872312679,
        "number": 715,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 16,
        "raffle_id": 872312679,
        "number": 716,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 17,
        "raffle_id": 872312679,
        "number": 717,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 18,
        "raffle_id": 872312679,
        "number": 718,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 19,
        "raffle_id": 872312679,
        "number": 719,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 20,
        "raffle_id": 872312679,
        "number": 720,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 21,
        "raffle_id": 872312679,
        "number": 721,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 22,
        "raffle_id": 872312679,
        "number": 722,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 23,
        "raffle_id": 872312679,
        "number": 723,
        "status": "disponible",
        "user_id": null
      }, {
        "ticket_id": 24,
        "raffle_id": 872312679,
        "number": 724,
        "status": "disponible",
        "user_id": null
      },
      {
        "ticket_id": 25,
        "raffle_id": 872312679,
        "number": 725,
        "status": "disponible",
        "user_id": null
      }
    ]
  }

  return tickets
}

export { getRafflesRequest, getRaffleByProductIdRequest, getTicketsByRaffleIdRequest }
