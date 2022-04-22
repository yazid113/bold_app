import React from 'react'
import Navbar from './Navbar'
import './Filtro.css'
import OpFiltro from './OpFiltro'

const Filtro = () => {

  return (
    <div className='filtro--container'>
        <Navbar />
        <OpFiltro />
    </div>
  )
}

export default Filtro