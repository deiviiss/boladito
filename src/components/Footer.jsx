import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <div className='flex flex-col justify-center items-center bg-primary p-2 text-xs text-white'>
        <h1 className=''>Mapa del sitio</h1>

        <div className=" grid grid-cols-2">

          <div className="p-5">
            <h2 className='font-bold'>Ayuda</h2>
            <ul>
              <li>
                <NavLink to={'/'} >
                  Compras
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Resolución de problemas
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Centro de seguridad
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="p-5">
            <h2 className='font-bold'>Redes sociales</h2>
            <ul>
              <li>
                <NavLink to={'/'} >
                  Twitter
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Facebook
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Youtube
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="p-5">
            <h2 className='font-bold'>Mi cuenta</h2>
            <ul>
              <li>
                <NavLink to={'/'} >
                  Resumen
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Favoritos
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Compras
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="p-5">
            <h2 className='font-bold'>Modelos de recompensa</h2>
            <ul>
              <li>
                <NavLink to={'/'} >
                  Fidelidad
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Comparte y gana
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Referidos
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="p-5">
            <h2 className='font-bold'>Acerca de</h2>
            <ul>
              <li>
                <NavLink to={'/'} >
                  Boladito
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Tendencias
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} >
                  Inversiones
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <footer className="flex justify-center items-center w-full absolute bottom-0 text-[9px] text-white gap-3 p-5 mt-5 bg-primary shadow-[0_-3px_5px_0px_rgba(0,0,0,0.3)]">
        <NavLink to={'/'}>Terminos y condiciones</NavLink>
        <NavLink to={'/'}>Politicas de Privacidad</NavLink>
        <NavLink to={'/'}>Ayuda</NavLink>
      </footer>
    </>
  )
}

export default Footer
