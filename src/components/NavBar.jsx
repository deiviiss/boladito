import { NavLink } from 'react-router-dom'
import iconSearch from '../assets/icons/BUSCAR.svg'
import iconShopping from '../assets/icons/CARRITO.svg'
import logoImage from '../assets/icons/LOGO.svg'
import iconUser from '../assets/icons/USER.svg'

import '../styles/nav.css'

export default function NavBar () {
  return (
    <nav className='flex flex-col'>

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
            <img
                className='h-[26px]'
                src={ iconShopping }
                alt="icono de carrito"
          />
          </li>
        </ul>
      </div>

      <form className='flex justify-center items-center h-[42px] bg-secondary'>
        <input type="search" name='' id='' className='min-w-[350px] h-[27px] rounded-lg'/>
      </form>

    </nav>
  )
}
