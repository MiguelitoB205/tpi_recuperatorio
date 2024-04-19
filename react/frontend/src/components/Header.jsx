import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div className='contenedor'>
      <div className='caja-a'>
      <FontAwesomeIcon icon={faBowlFood} style={{color: 'red', width:'40px', height: '30px'}}/>
      <h1 className='title'>Bogotá <strong style={{color: 'aliceblue'}}>Gourmet</strong> </h1>
      </div>
      <div className="nav">
      
      </div>
     
    </div>
  )
}

export default Header
