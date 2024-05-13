import { useState } from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <header>

      <section className={`navbar ${isOpen ? "is-open" : ""}`}>

        <div className={`hide ${isOpen ? "is-open" : ""}`}>
          <img className={`logo ${isOpen ? "is-open" : ""}`} src="../../public/img/Component 17.png" alt="" />
          <h5 className={`darkbrown-text ${isOpen ? "is-open" : ""}`}>ESTAMOS ABERTOS</h5>
          <h5 className={`whitebrown-text ${isOpen ? "is-open" : ""}`}>7 DIAS NA SEMANA</h5>
        </div>
        
        <aside className={`aside ${isOpen ? "is-open" : ""}`}>
          <img className="hide" src="../../public/img/Union.svg" alt="" />
          <h5 className={`whitebrown-text ${isOpen ? "is-open" : ""}`}>ENDEREÇO</h5>
          <img className="hide" src="../../public/img/Vector.svg" alt="" />
          <h5 className={`whitebrown-text ${isOpen ? "is-open" : ""}`}>(00)00000-0000</h5>
          <button className={`hide ${isOpen ? "is-open" : ""}`} >AGENDAR</button>

          <MenuIcon fontSize='large' className='menu-mobile' onClick={toggleMenu}/>
          
        </aside>

      </section>
    </header>
  )
}

export default Navbar;