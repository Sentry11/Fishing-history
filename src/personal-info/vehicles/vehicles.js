
import './vehicle.scss';
import VehicleSingle from './vehicle-single';
import img1 from "../../image/background-inner-tabs/plane.png"
import img2 from "../../image/background-inner-tabs/yacht.png"
import img3 from "../../image/background-inner-tabs/helicopter.png"
import { mainTheme } from '../../data/theme';


function Vehicle({veh1,veh2,veh3}) {

    return (
        <>
             <div className="about-description-vehicle" style={{color:mainTheme.primary, background: mainTheme.secondary} } >
                 <h1  style={{color:mainTheme.primary, background: mainTheme.secondary} }>Средства передвижения</h1>
             </div>
                 <section className="content-vehicle" style = {{background: `${mainTheme.secondary}`}} > 
                     <div className = "cards-vehicle" >
                         <VehicleSingle img = {img1} name = "Номер 1" imgveh = {veh1}/> 
                         <VehicleSingle img = {img2} name = "Номер 2" imgveh = {veh2}/> 
                         <VehicleSingle img = {img3} name = "Номер 3" imgveh = {veh3}/> 
 
                      </div> 
                  </section> 
                 
                </>
   
     )
 }
 

export default Vehicle;