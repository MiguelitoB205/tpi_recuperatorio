import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Card = () => {
  const anchura='200px'
  const altura='190px'
  const [categories, setCategories] = useState([])

  const peticionesGet=async()=>{
    const res= await fetch('http://localhost:3000/catering/categorias')
    const data = res.json();
    console.log(data)
    
 
    }
    useEffect(()=>{
      peticionesGet();
    }, [])

  return (
    <div className='conjunto_cards'>
      <Link to='/categoria/' >
        <div className='card'></div>
      </Link>
    </div>
  )
  }

  


export default Card
