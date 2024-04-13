import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <section className='navbar'>

        <div>
          <img className='logo' src="../../public/img/Component 17.png" alt="" />
          <h5 className='darkbrown-text'>ESTAMOS ABERTOS</h5>
          <h5 className='whitebrown-text'>7 DIAS NA SEMANA</h5>
        </div>

        <aside>
          <img src="../../public/img/Union.svg" alt="" />
          <h5 className='whitebrown-text'>ENDEREÇO</h5>
          <img src="../../public/img/Vector.svg" alt="" />
          <h5 className="whitebrown-text">(00)00000-0000</h5>
          <button>AGENDAR</button>
        </aside>

      </section>
    </header>
  )
}

export default Navbar;