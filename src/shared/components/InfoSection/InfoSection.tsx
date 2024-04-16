import './InfoSection.css'

const InfoSection = () => {
    return (
        <section className='section'>
            <aside>
                <div>
                    <img className='icon' src="../../public/img/address img.svg" alt="" />
                    <h2 className='tittle'>ADDRESS</h2>
                    <h4 className='info'>1000, RUA, ENDEREÇO E NUMERO</h4>
                </div>

                <div>
                    <img className='icon' src="../../public/img/phone img.png" alt="" />
                    <h2 className='tittle'>PHONE</h2>
                    <h4 className='info'>+00(00) 00000-0000</h4>
                    <h4 className='info'>+00(00) 00000-0000</h4>
                </div>

                <div>
                    <img className='icon' src="../../public/img/hours img.png" alt="" />
                    <h2 className='tittle'>HOURS</h2>
                    <h4 className='info'>SEG - SAB: 9AM - 8PM</h4>
                    <h4 className='info'>DOM: 9AM - 6PM</h4>
                </div> 
            </aside>
        </section>
    )
}

export default InfoSection;