import React from 'react'
import LogoBoladito from './components/Logo'
import ButtonUser from './components/ButtonUser'
import ButtonSearch from './components/ButtonSearch'
import ButtonShopping from './components/ButtonShopping'

export default function Nav () {
  return (
    <div className='contentNav'>
      <div className='contentLogo'>
        <div>
          < LogoBoladito />
        </div>
      </div>
      <div className='contentButtons'>
        <div>
          <div>
            <form>
              <input type="search" name='' id='' className='inputSearch'/>
            </form>
          </div>
          <div><ButtonSearch /></div>
          <div><ButtonUser /></div>
          <div><ButtonShopping /></div>
        </div>
      </div>
    </div>
  )
}