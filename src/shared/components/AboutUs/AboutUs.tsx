import './AboutUs.css'

import icon1 from '../../../../public/img/licensed icon.svg'
import icon2 from '../../../../public/img/masters icon.svg'
import icon3 from '../../../../public/img/trusted icon.svg'

const AboutUs = () => {

    return (
        <>
            <div id='main-aboutus'>

                <div id='tittle-aboutus'>
                    <h2 id='h2-aboutus'>POR QUE A GENTE</h2>
                    <p id='p-aboutus'>Entenda alguns dos motivos do porque escolher a Evolução como sua barbearia.</p>
                </div>

                <div id='container-aboutus'>
                    <div id='licensed'>
                        <img src={icon1} alt=""/>
                        <p className='tittle'>LICENSED</p>
                        <p>Nossa equipe de barbeiros licenciados e segurados segue diretrizes rígidas de limpeza e higienização para uma experiência segura e confortável.</p>
                    </div>
                    <div id='masters'>
                        <img src={icon2} alt=""/>
                        <p className='tittle'>MASTERS</p>
                        <p>Nossos barbeiros são apaixonados por seu ofício e têm como objetivo oferecer cortes de cabelo de alta qualidade para cada cliente.</p>
                    </div>
                    <div id='trusted'>
                        <img src={icon3} alt=""/>
                        <p className='tittle'>TRUSTED</p>
                        <p>Temos uma forte reputação com clientes satisfeitos.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs;