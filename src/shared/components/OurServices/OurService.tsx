import './OurService.css'

const OurService = () => {

    return (
        <>
            <main className="main">

                <div id='header-tittle'>
                    <h1 id='main-tittle'>NOSSOS SERVIÇOS</h1>
                    <h6 id='sub-tittle'>Experience the Convenience of in-home Barber Services</h6>
                </div>

                <div className='square'>
                    <div className='boxes'>
                        <div className='box'>
                            <div className='icone'>
                                <img src="../../../../public/img/Adult haircut img.svg" alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src="../../../../public/img/Image icon.svg" alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src="../../../../public/img/Image icon (1).svg" alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src="../../../../public/img/Image icon (2).svg" alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src="../../../../public/img/Image icon (3).svg" alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='caixa-botoes'>
                    <div className='botoes'>
                        <button id='botao-agenda'>AGENDAR SERVICO</button>
                        <button id='botao-contato'>ENTRAR EM CONTATO</button>
                    </div>
                </div>

            </main>


        </>
    )
}

export default OurService;