import PropTypes from 'prop-types'

export default function ProductsListLayout ({ children }) {
  return (
    <div className="grid grid-cols-2 my-[10px] gap-[10px] mx-2">
      {children}
    </div>
  )
}

ProductsListLayout.propTypes = {
  children: PropTypes.node
}
