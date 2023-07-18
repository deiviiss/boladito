import PropTypes from 'prop-types'
import { useRef } from 'react'
import iconBoleto from '../assets/icons/Boleto.svg'
import ButtonClose from '../assets/icons/ButtonClose.svg'

export default function Modal ({ isOpen, setIsOpen, children, title }) {
  const cancelButtonRef = useRef(null)
  return (
    <div className={`absolute top-0 left-0 bottom-0 right-0 z-50 flex flex-col justify-center items-center w-full h-[1500px] px-2 mx-auto bg-gray-500 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity - 100'}`}>

      <div className="absolute top-16 shadow-xl transform transition-all bg-gray-50 rounded py-1 px-2 mx-2">
        <div className="relative px-1 py-3 justify-between">
          <div className="bg-[#A9064B] flex items-center w-full justify-between rounded-lg text-3xl text-white p-3">
            <div className="flex items-center gap-2">
              <img className="h-[30px]" src={iconBoleto} alt="icono del boleto" />
              <h1>{title}</h1>
            </div>
          </div>
          <div className="absolute -right-4 -top-3 w-6 z-10 text-gray-400 cursor-pointer" ref={cancelButtonRef}>
            <img src={ButtonClose} alt="cerrar" onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div className="pt-3 pb-4">
          {children}
        </div>

      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string
}
