import './InfoSection.css'
import imagem1 from '../../../../public/img/address img.svg'
import imagem2 from '../../../../public/img/phone img.png'
import imagem3 from '../../../../public/img/hours img.png'
const InfoSection = () => {
    return (
        <section className='section'>
            <aside>
                <div>
                    <img className='icon' src={imagem1} alt="" />
                    <h2 className='tittle'>ADDRESS</h2>
                    <h4 className='info'>1000, RUA, ENDEREÇO E NUMERO</h4>
                </div>

                <div>
                    <img className='icon' src={imagem2} alt="" />
                    <h2 className='tittle'>PHONE</h2>
                    <h4 className='info'>+00(00) 00000-0000</h4>
                    <h4 className='info'>+00(00) 00000-0000</h4>
                </div>

                <div>
                    <img className='icon' src={imagem3} alt="" />
                    <h2 className='tittle'>HOURS</h2>
                    <h4 className='info'>SEG - SAB: 9AM - 8PM</h4>
                    <h4 className='info'>DOM: 9AM - 6PM</h4>
                </div>
            </aside>
        </section>
    )
}

export default InfoSection;