
import { mainTheme } from '../../data/theme'
import CountUp from 'react-countup';

import icons1 from'../../image/fish-icons/icons1.svg'  
import icons2 from'../../image/fish-icons/icons2.svg'  
import icons3 from'../../image/fish-icons/icons3.svg'  
import icons4 from'../../image/fish-icons/icons4.svg'  
import icons5 from'../../image/fish-icons/icons5.svg'  


import './landing.scss';


const  Landing = ({name, num, img}) => {

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: mainTheme.primary }}    >
                      
                     <div className='lcl--content'>
                       
                           <img src = {icons1} alt = ''/>
                           <img src = {icons2} alt = ''/>
                           <img src = {icons3} alt = ''/>
                           <img src = {icons4} alt = ''/>
                           <img src = {icons5} alt = ''/>
                           
                  </div>
                </div>
                <img
                    src={img}
                    alt=''
                    className='landing--img'
                    style={{
                        borderColor: mainTheme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: mainTheme.secondary }}>
                    <div
                        className='lcr--content'
                        style={{ color: mainTheme.tertiary }}>
                        <h6>{name}</h6>
                        <h1> <CountUp duration={num > 50 ? 1: 4 } delay={0} start = {0} end={num} /></h1>
                        <p> - количество словленой рыбы в 2022</p>

                    </div>
                </div>
            </div>
         </div>
    
    );
}

export default Landing;