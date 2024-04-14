import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='contenedor'>
      <FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}}/>
      <FontAwesomeIcon icon={faInstagram} style={{color: 'fuchsia'}}/>
      <FontAwesomeIcon icon={faTiktok} style={{color: 'azure'}}/>
    </div>
  )
}

export default Footer
