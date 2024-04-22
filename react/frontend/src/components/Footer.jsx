import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='contenedor' >
      <FontAwesomeIcon icon={faFacebook} style={{color: 'blue', width: '40px', height: '40px'}}/>
      <FontAwesomeIcon icon={faInstagram} style={{color: 'fuchsia', width: '40px', height: '40px'}}/>
      <FontAwesomeIcon icon={faTiktok} style={{color: 'azure', width: '40px', height: '40px'}}/>
      <FontAwesomeIcon icon={faYoutube} style={{color: 'red', width: '40px', height: '40px'}}/>
    </div>
  )
}

export default Footer
