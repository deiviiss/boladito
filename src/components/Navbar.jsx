import { NavLink } from 'react-router-dom'
import iconSearch from '../assets/icons/BUSCAR.svg'
import iconShopping from '../assets/icons/CARRITO.svg'
import logoImage from '../assets/icons/LOGO.svg'
import iconUser from '../assets/icons/USER.svg'
import { useProducts } from '../context/productsContext'

export default function NavBar () {
  const { cartProducts } = useProducts()
  return (
    <nav className='flex flex-col bg-primary sticky top-0 z-10'>

      <div className="flex justify-between h-[42px] p-2">
        <NavLink to={'/'} className='w-[140px]'>
          <img src={ logoImage } alt="logo" className=''/>
        </NavLink>

        <ul className='flex gap-1'>
          <li>
            <NavLink to="/list-products">
              <img
                  className='h-[26px]'
                  src={ iconSearch }
                  alt="icono de buscar"
          />
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <img
                  className='h-[26px]'
                  src={ iconUser }
                  alt="icono de usuario"
          />
            </NavLink>
          </li>

          <li>
            <NavLink to={'/checkout'}>
              <img
                  className='h-[26px]'
                  src={iconShopping}
                  alt="icono de carrito"
              />
              {cartProducts.length > 0 ? <div className='absolute right-1 top-1 w-4 h-4 text-[9px] text-center bg-[#D7E34B] rounded-full p-[2px]'>{cartProducts.length}</div> : null}
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  )
}
