import iconUser from '../assets/icons/USER.svg'
import iconShopping from '../assets/icons/CARRITO.svg'
import iconSearch from '../assets/icons/BUSCAR.svg'
import logoImage from '../assets/icons/LOGO.svg'

import '../styles/nav.css'

export default function NavBar () {
  return (
    <nav className='nav'>

      <div className='nav__logo'>
        <img className='nav__logo--boladito' src={ logoImage } alt="logo" />
      </div>

      <ul className='nav__list'>
        <li className='nav__item'>
            <form>
              <input type="search" name='' id='' className='nav__link--search'/>
            </form>
        </li>

        <li className='nav__item'>
          <img
            className='nav__link'
            src={ iconSearch }
            alt="icono de buscar"
          />
        </li>

        <li className='nav__item'>
          <img
            className='nav__link'
            src={ iconUser }
            alt="icono de usuario"
          />
        </li>

        <li className='nav__item'>
          <img
            className='nav__link'
            src={ iconShopping }
            alt="icono de carrito"
          />
        </li>
      </ul>
    </nav>
  )
}
