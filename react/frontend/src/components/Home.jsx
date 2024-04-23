import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const [alimentos, setAlimentos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [modalInsertar, setModalInsertar] = useState(false);
  const [alimentoRegistrado, setAlimentoRegistrado] = useState({
    id: '',
    nombre: '',
    descripcion: ''
  });

  const getAlimentos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/producto');
      setAlimentos(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/producto', alimentoRegistrado);
      setModalInsertar(false);
      getAlimentos(); // Actualizar la lista después de la inserción
    } catch (error) {
      console.error(error.message);
    }
  };

  const searcher = (e) => {
    setBusqueda(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlimentoRegistrado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const abrirModalInsertar = () => {
    setAlimentoRegistrado({
      id: '',
      nombre: '',
      descripcion: ''
    });
    setModalInsertar(true);
  };

  useEffect(() => {
    getAlimentos();
  }, []);

  const results = !busqueda
    ? alimentos
    : alimentos.filter((dato) =>
        dato.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );

  return (
    <div>
      <Header />
      <div className='listado'>
        <h2>Les ofrecemos los mejores manjares del catering</h2>
        <nav>
          <input
            type='text'
            style={{ padding: '10px 30px', borderRadius: '25px' }}
            value={busqueda}
            placeholder='Búsqueda por catering'
            onChange={searcher}
          />
        </nav>
        <button
          style={{ backgroundColor: 'black', margin: '20px' }}
          className='btn btn-success'
          onClick={abrirModalInsertar}
        >
          Registrar
        </button>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.nombre}</td>
                <td>{result.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Registrar producto</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='form-group'>
              <label>ID</label>
              <input
                className='form-control'
                readOnly
                type='text'
                name='id'
                value={alimentoRegistrado.id}
                onChange={handleChange}
              />
              <br />

              <label>Nombre</label>
              <input
                className='form-control'
                type='text'
                name='nombre'
                value={alimentoRegistrado.nombre}
                onChange={handleChange}
              />
              <br />

              <label>Descripción</label>
              <input
                className='form-control'
                type='text'
                name='descripcion'
                value={alimentoRegistrado.descripcion}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary' onClick={handleSubmit}>
              Insertar
            </button>
            <button
              className='btn btn-danger'
              onClick={() => setModalInsertar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Home;