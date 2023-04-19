import React from 'react'
import './init.css'
import UniqueProduct from '../../components/UniqueProduct/UniqueProduct'

export default function Init(){
	return(
		<div>
			<div> banner </div>
			<div className='sectionBreakContainer'>
				<div className='sectionBreak'>{null}</div>
				<div className='sectionBreakTitle'>PROXIMOS EN SORTEAR</div>
				<div className='sectionBreak'>{null}</div>
			</div>
			<div className='contentProducts'>
				<UniqueProduct/>
				<UniqueProduct/>
				<UniqueProduct/>
				<UniqueProduct/>
			</div >
		</div>
	)
}