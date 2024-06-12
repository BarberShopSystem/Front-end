import { useEffect, useState } from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ServicoModal from '../ServiceModal/ServiceModal.tsx';

const profissionais = [
    { id: 1, nome: 'Profissional 1' },
    { id: 2, nome: 'Profissional 2' },
    { id: 3, nome: 'Profissional 3' }
  ];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

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
          <button className={`hide ${isOpen ? "is-open" : ""}`} onClick={handleShow}>AGENDAR</button>
          {isOpen? <CloseIcon fontSize='large' className='menu-mobile close' onClick={toggleMenu}/> : <MenuIcon fontSize='large' className='menu-mobile' onClick={toggleMenu}/> }
        </aside>

      </section>
      <ServicoModal show={showModal} handleClose={handleClose} profissionais={profissionais} />
    </header>
  )
}

export default Navbar;