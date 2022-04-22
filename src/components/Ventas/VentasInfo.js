import React from 'react'
import TotalVentas from './TotalVentas'
import './TotalVentas.css'
import './Navbar.css'
import './VentasInfo.css'
import Filtro from './Filtro'

const VentasInfo = () => {
  return (
    <div className='ventasInfo--container'>
      <TotalVentas />
      <Filtro />
    </div>
  )
}

export default VentasInfo