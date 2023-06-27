import PropTypes from 'prop-types'
import iconLike from '../assets/icons/LIKE.svg'
import iconNoLike from '../assets/icons/NOLIKE.svg'

export const ButtonLike = ({ isLike }) => {
  return (
    <button>
      {isLike ? <img src={ iconLike } alt="like" className='w-[20px]' /> : <img src={ iconNoLike } alt="no like" className='w-[20px]' /> }
    </button>
  )
}

ButtonLike.propTypes = {
  isLike: PropTypes.bool
}
