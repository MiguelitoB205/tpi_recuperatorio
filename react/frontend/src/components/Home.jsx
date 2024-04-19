import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  const [alimentos, setAlimentos] = useState([])
  const [busqueda, setBusqueda] = useState("");


  const getAlimentos=async()=>{
    const response= await fetch('http://localhost:3000/catering/alimentos')
    const data = await response.json()
    setAlimentos(data)
  }
  
  const searcher = (e) =>{
    setBusqueda(e.target.value)
  }
  const results = !busqueda ? alimentos : alimentos.filter((dato)=> dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

  useEffect(()=>{
    getAlimentos()
  }, [])
   

    

  return (
    <div>
        <Header/>
   <div>
      <h1>Bienvenidos a lo mejor de los Caterings</h1>
      <nav>
      <input type="text" style={{padding: '10px 30px', borderRadius: '25px 0 0  25px'}}
      value={busqueda} 
      placeholder='Búsqueda por catering'
     onChange={searcher}/>
      <button style={{borderRadius: '0 25px 25px 0', backgroundColor:'greenyellow'}}>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </nav>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
      {results.map(result=>(
        <tr key={result.id} >
          <td>{result.id}</td>
          <td>{result.nombre}</td>
          <td>{result.descripcion}</td>
        </tr>
      ))}
      </tbody>      
    </Table>
  </div>
      <Footer/>
    </div>
  )
}

export default Home
