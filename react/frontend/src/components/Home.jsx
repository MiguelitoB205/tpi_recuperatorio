import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'

const Home = () => {
  return (
    <div>
        <Header/>
      <h1>Categorías</h1>
      
      <div className="conjunto_cards" style={{display: 'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
