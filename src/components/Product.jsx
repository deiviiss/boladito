import PropTypes from 'prop-types'
export default function Product ({ product }) {
  return (
    <div className="w-[175px] h-[158px] rounded-3xl bg-white p-[7px] text-xs">
      <img className='w-[100px] h-[58px] object-cover' src={product.url} alt="product" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}
Product.propTypes = {
  product: PropTypes.object
}
