import Home from './components/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoriaSection from './CategoriaSection'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoria/:categoria_id' element={<CategoriaSection/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
