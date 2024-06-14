import './OurService.css'

import box1 from '../../../../public/img/Adult haircut img.svg'
import box2 from '../../../../public/img/Image icon.svg'
import box3 from '../../../../public/img/Image icon (1).svg'
import box4 from '../../../../public/img/Image icon (2).svg'
import box5 from '../../../../public/img/Image icon (3).svg'

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
                                <img src={box1} alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src={box2} alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src={box3} alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src={box4} alt="" />
                            </div>
                            <div className='texto'>
                                <p className='texto-titulo'>SOCIAL</p>
                                <p className='descricao'>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                                <p className='preco'>$39 USD</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icone'>
                                <img src={box5} alt="" />
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