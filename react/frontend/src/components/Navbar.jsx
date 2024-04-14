import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <input type="text" style={{padding: '10px 30px', borderRadius: '25px 0 0  25px'}} />
      <button style={{borderRadius: '0 25px 25px 0', backgroundColor:'greenyellow'}}>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>
  )
}

export default Navbar
