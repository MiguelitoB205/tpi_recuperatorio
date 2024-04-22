import { faBowlFood, faHamburger, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div className='contenedor'>
      <div className='caja-a'>
      <h1 className='title' style={{margin:'10px 20px'}}>Delicious <em style={{color: 'aliceblue'}}>Healthy</em> </h1>
      <FontAwesomeIcon icon={faHamburger}  style={{color: 'red', width:'50px', height: '45px'}}/>
      </div>
    </div>
  )
}

export default Header
