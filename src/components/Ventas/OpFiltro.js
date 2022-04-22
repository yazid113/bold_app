import React,{useState} from 'react'
import './OpFiltro.css'

const OpFiltro = () => {
    const options = [
        { value: "Cobro con datafoto", label: "Cobro con datafoto" },
        { value: "Cobro con link de pago", label: "Cobro con link de pago" },
        { value: "Ver todos", label: "Ver todos" },
      ];

      const [toggle,setToggle]=useState(false)

      const openFilterHandler = () =>{
        setToggle(true)
    }
        const closeFilterHandler = () =>{
        setToggle(false)
    }
  return (
    <>
    {!toggle?
    
    <div onClick={openFilterHandler} className='filtro--filtrar'><p className='filtro--filtrar--text'>FILTRAR</p></div>
    :
        <div className="opfiltro--container">
            <div className='opfiltro--filtrar'>
                <p className='opfiltro--filtrar--text'>FILTRAR</p>
                <span onClick={closeFilterHandler} className='opfiltro--close'>X</span>
            </div>
            {options.map((x, i) => <label key={i}>
                <input
                type="checkbox"
                name="option"
                value={x.value}
                /> {x.label}
            </label>)}
            <button className='opfiltro--btn'>Aplicar</button>
         </div>
    }
    </>
  )
}

export default OpFiltro