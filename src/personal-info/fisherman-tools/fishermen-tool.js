

import FishermanToolsItems from './fisherman-tools-items';
import './fishermen-tool.scss'
import img1front from "../../image/background-inner-tabs/fish.png"
import img2front from "../../image/background-inner-tabs/snastb.png"
import img3front from "../../image/background-inner-tabs/hooks.png"
import { mainTheme } from '../../data/theme';




function FishermanTool(imgRod, imgFeeder, imgHooks) {

    return (

       <>
       
       {/* className='h1tools' */}
            <div className="about-description" style={{color:mainTheme.primary, background: mainTheme.secondary} } >
                <h1  style={{color:mainTheme.primary, background: mainTheme.secondary} }>Инструменты рыбака</h1>
            </div>
                <section className="content" style = {{background: `${mainTheme.secondary}`}} > 
                    <div className = "cards" >
                        <FishermanToolsItems img = {img1front} name = 'Удочка'/> 
                        <FishermanToolsItems img = {img2front} name = 'Снасть'/> 
                        <FishermanToolsItems img = {img3front} name = 'Крючки'/> 

                     </div> 
                 </section> 
                
               </>
  
    )
}

export default FishermanTool;