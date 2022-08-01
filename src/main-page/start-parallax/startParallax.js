import { Parallax } from 'react-parallax';
import paralaxBack from "../../image/paralax-background.jpg"
import { Line } from '../tabs/tabs';

import "./startParallax.scss"






const StartParallax = () => (
    <>
      <Line/>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={paralaxBack}
        bgImageAlt="fishing"
        strength={0}
    >
      
        <div style={{ height: '100vh', width:"100%",zIndex: "1", display:"grid"}} 
        >
             <div className="heading-frame">
	            <h2 className='heading-h2' >EVERY MAN<br/>NEED REST,PURE CALM</h2></div>
        </div>
    </Parallax>

    </>
);

export default StartParallax