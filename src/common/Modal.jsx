import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useRef } from 'react'
import ButtonClose from '../assets/icons/ButtonClose.svg'

export default function Modal ({ open, setOpen, children, title }) {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom  text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full min-w-[250px] w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
                <h3 className="text-xl">{title}</h3>

                <div className='absolute -right-3 -top-2 w-6 z-10 text-gray-400 cursor-pointer' ref={cancelButtonRef}>
                  <img src={ButtonClose} alt='cerrar' onClick={() => setOpen(false)}
                       />
                </div>
              </div>
              <div className="bg-white  pt-3 pb-4 sm:p-1 sm:pb-4">
                <div className="sm:flex sm:items-start justify-center">
                  {children}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string
}
