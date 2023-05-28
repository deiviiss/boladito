import PropTypes from 'prop-types'

export default function ProductsActiveLayout ({ children }) {
  return (
    <div className="grid grid-cols-2 mt-[10px] gap-[10px] mr-[7.5px] ml-[7.5px]">
      {children}
    </div>
  )
}

ProductsActiveLayout.propTypes = {
  children: PropTypes.array
}
