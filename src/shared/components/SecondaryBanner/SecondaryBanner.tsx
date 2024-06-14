import './SecondaryBanner.css'
import background from '../../../../public/img/Call to action.png'

const SecondaryBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='bg'></div>
    )
}

export default SecondaryBanner;