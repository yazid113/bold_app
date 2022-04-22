import React from 'react'
import './TotalVentas.css'

const TotalVentas = () => {
  return (
      <div className='container'>
        <h3 className='header--totalVentas'><header className='header--totalVentas--text'>Total de ventas de septiembre i</header></h3>
        <div className='valor--totalVentas'>$ 1'560.000</div>
        <span className='mes--totalVentas'>Septiembre, 2020</span>
      </div>
  )
}

export default TotalVentas