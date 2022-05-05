import brain from './logos/brain.png'
import './Logo.css';
import Tilt from 'react-tilt'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"> <img alt='brain icon' height={200} style={{paddingTop: '5px'}} src={brain}/> </div>
            </Tilt>

        </div>
    )
}

export default Logo;