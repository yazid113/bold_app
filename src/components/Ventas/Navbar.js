import React,{useState} from 'react'

const Navbar = () => {

  const links = ['Hoy', 'Esta semana', 'Septiembre'];
  const [active, setActive] = useState(links[2]);

  return (
      <>
        <ul className='nav--container'>
        {links.map((link) => (
          <li className="nav--a">
            <a 
              href={`#${link}`} 
              className={`nav--a--${active === link && 'active'}`}
              onClick={() => setActive(link)}
            >{link}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar