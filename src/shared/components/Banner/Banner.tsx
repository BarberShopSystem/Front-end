import './Banner.css'
import background from '../../../../public/img/hero img.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='bg'></div>
    )
}

export default Banner;