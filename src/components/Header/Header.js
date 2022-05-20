import img from './cryptologo2.png'
import './Header.css'

export default function Header (){
    return(
        <div className='Header'>
            <img src={img} alt='crypto logo'/>
        </div>
    )
}