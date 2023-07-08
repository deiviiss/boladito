
const getProductsRequest = async () => {
  const products = [
    {
      product_id: 1,
      name: 'Xtreme PC GeForce',
      url: 'https://http2.mlstatic.com/D_NQ_NP_941710-MLM51863601032_102022-O.webp',
      description: 'Rtx 2060 13Gb I5 16 Gb 500Gb Monitor 144hz',
      like: false,
      price: 100,
      raffleDate: new Date('2023-06-01'),
      category: 'pc',
      quantity: 4,
      total: 60
    },
    {
      product_id: 2,
      name: 'Teclado gamer Game Factor',
      url: 'https://m.media-amazon.com/images/I/61JhIy5rXLL.__AC_SX300_SY300_QL70_ML2_.jpg',
      description: 'KBG400 QUERTY KRED Blue español España color negro',
      like: true,
      price: 10,
      raffleDate: new Date('2023-09-02'),
      category: 'keyboards'
    },
    {
      product_id: 3,
      name: 'Audifonos gamer',
      url: 'https://www.cyberpuerta.mx/img/product/XL/CP-CORSAIR-CA-9011215-NA-1.jpg',
      description: 'Corsair HS50 carbon',
      like: false,
      price: 10,
      raffleDate: new Date('2023-11-03'),
      category: 'earphones'
    },
    {
      product_id: 4,
      name: 'Monitor Gamer Samsung Odyssey',
      url: 'https://www.cyberpuerta.mx/img/product/XL/CP-SAMSUNG-LS24AG320NLXZX-9dbcda.jpg',
      description: 'G3 F24G35TLCD 24" negro 100V/240V',
      like: false,
      price: 30,
      raffleDate: new Date('2024-05-15'),
      category: 'screens'
    }
  ]

  return products
}

export { getProductsRequest }
