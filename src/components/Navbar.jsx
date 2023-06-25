import { NavLink } from 'react-router-dom'
import iconSearch from '../assets/icons/BUSCAR.svg'
import iconShopping from '../assets/icons/CARRITO.svg'
import logoImage from '../assets/icons/LOGO.svg'
import iconUser from '../assets/icons/USER.svg'

export default function NavBar () {
  return (
    <nav className='flex flex-col bg-primary sticky top-0 z-10'>

      <div className="flex justify-between h-[42px] p-2">
        <NavLink to={'/'} className='w-[140px]'>
          <img src={ logoImage } alt="logo" className=''/>
        </NavLink>

        <ul className='flex gap-1'>
          <li>
            <img
                className='h-[26px]'
                src={ iconSearch }
                alt="icono de buscar"
          />
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
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  )
}
