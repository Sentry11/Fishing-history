
import img from '../../image/pngwing.png'
import './about.scss';

import { mainTheme } from '../../data/theme';


function About({aboutSmall, aboutLarge}) {

    return (
        <div className="about" id="about" style={{backgroundColor: mainTheme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: mainTheme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: mainTheme.primary}}></div>
              <div className="style-line" style={{backgroundColor: mainTheme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: mainTheme.primary}}>Коротко о своей рыбалке</h2>
                    <p style={{color:mainTheme.tertiary80}}>{aboutSmall}<br/><br/>{aboutLarge}</p> 
                </div>
                <div className="about-img">
                    <img 
                        src={img}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About