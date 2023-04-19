import React from 'react'
import './uniqueProduct.css'
import ProductoImage from '../../images/products/1.jpg'
import iLikes from  '../../images/LIKE.svg'



export default function UniqueProduct () {
  return (

      <div className='contentUniqueProduct'>
        <div className='bandPrice'>
          <p className='contentPrice'>$100</p>
          <p className='contentPriceText'>POR BOLETO</p>
        </div>
        <div className='timeContainer'>
          <div className='timeContainerNumber'>1</div>
          <div className='timeContainerNumber'>1</div>
          <div className='timeContainerNumber'>8</div>
          <div className='timeContainerLetter'>:</div>
          <div className='timeContainerNumber'>0</div>
          <div className='timeContainerNumber'>2</div>
          <div className='timeContainerLetter'>:</div>
          <div className='timeContainerNumber'>4</div>
          <div className='timeContainerNumber'>4</div>
        </div>
        <div className='contentProductImage'>
          <img src={ProductoImage} alt="imagen de producto" className='ProductImage'/>
        </div>
        <div className='textProduct'>
          <div>
            {null}
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet.</p>
        </div>
        <div className='productLikes'>
        <img src={iLikes} alt="imagen de producto" className='ILikeImage'/>
        </div>
      </div>
  )
}