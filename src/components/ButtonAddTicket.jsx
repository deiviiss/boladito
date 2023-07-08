import PropTypes from 'prop-types'

const ButtonAddTicket = ({ handleClick, product }) => {
  return (
    <div className='flex items-center justify-center rounded-full bg-secondary w-6 h-6 min-w-[24px] border border-[#b795ff] text-white text-xl text-center'>
      <button onClick={() => handleClick(product)}>
        +
      </button>
    </div>
  )
}

ButtonAddTicket.propTypes = {
  handleClick: PropTypes.func,
  product: PropTypes.object
}

export default ButtonAddTicket
