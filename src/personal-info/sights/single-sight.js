import React,{useState} from 'react';
import {Fade} from 'react-awesome-reveal';
import { mainTheme } from '../../data/theme';

import './single-sight.scss'



function SingleSight({img, desc}) {

    const [show, setShow] = useState(false);

    const onToggleStyle = () => {

       setShow(!show)
    }


   
    return (
        <Fade bottom>
            <figure onMouseEnter={onToggleStyle} className='for-remark' style = {{}}>
            <div  
            key={1} 
            className="single-service" 
            style={{backgroundColor:mainTheme.primary400, backgroundSize: 'cover', backgroundImage:`url(${img})`}}>
                       
                <div className="service-content"  style={{color:mainTheme.tertiary}}>
                {/* <h4  style={{color:blueThemeDark.tertiary}}>I have been there</h4>  */}
                </div>       
            </div>
             <h4  style={{color:mainTheme.tertiary}}>{desc}</h4> 
            </figure>
            
        </Fade>
    )
}

export default SingleSight