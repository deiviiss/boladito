
const getRafflesRequest = async () => {
  const raffles = [
    {
      id: 1,
      nombre: 'Rifa de PC Gamer',
      descripcion: 'Rifa de un PC Gamer de última generación',
      producto: {
        id: 123,
        nombre: 'PC Gamer',
        precio: 1500
      },
      boletosRestantes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 15]
    },
    {
      id: 2,
      nombre: 'Rifa de PC Gamer',
      descripcion: 'Rifa de un PC Gamer de última generación',
      producto: {
        id: 123,
        nombre: 'PC Gamer',
        precio: 1500
      },
      boletosRestantes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 15]
    },
    {
      id: 3,
      nombre: 'Rifa de PC Gamer',
      descripcion: 'Rifa de un PC Gamer de última generación',
      producto: {
        id: 123,
        nombre: 'PC Gamer',
        precio: 1500
      },
      boletosRestantes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 15]
    },
    {
      id: 4,
      nombre: 'Rifa de PC Gamer',
      descripcion: 'Rifa de un PC Gamer de última generación',
      producto: {
        id: 123,
        nombre: 'PC Gamer',
        precio: 1500
      },
      boletosRestantes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 15]
    }

  ]

  return raffles
}

export { getRafflesRequest }
