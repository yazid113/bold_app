import React from 'react'
import './ListaVentas.css'

const ListaVentas = () => {
  const data = [
    {
        transaccion: 'Cobro exitoso',
        fecha: '05/09/2020-20:03:00',
        pago:'**** **** **** 7711',
        id:'GEN48284UBV7',
        monto:'$ 48.000'
    },
    {
        transaccion: 'Cobro no realizado',
        fecha: '03/09/2020-17:14:24',
        pago:'**** **** **** 7711',
        id:'GEN23784UBV2',
        monto:'$ 25.000'
    },
    {
        transaccion: 'Cobro exitoso',
        fecha: '02/09/2020-14:11:50',
        pago:'**** **** ****. 7711',
        id:'GEN58761UBV5',
        monto:'$ 25.000'
    },
]
  
  return (
    <div className='table--container'>
    <h2>Tus ventas de septiembre</h2>
      <table>
        <tr>
          <th>Transaccion</th>
          <th>Fecha y Hora</th>
          <th>Metodo de pago</th>
          <th>ID transaccion Bold</th>
          <th>Monto</th>
        </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td className='td--transa'>{val.transaccion}</td>
                <td>{val.fecha}</td>
                <td>{val.pago}</td>
                <td>{val.id}</td>
                <td className='td--transa'>{val.monto}</td>
              </tr>
            )
          })}
      </table>
        
    </div>
  )
}

export default ListaVentas