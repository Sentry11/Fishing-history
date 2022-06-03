
import './sights.scss'
import SingleSight from './single-sight';
import { mainTheme } from '../../data/theme';



function Sights({sights}) {

//  console.log(sights)
    return (
        <>
                <div className="services" id="services" style={{backgroundColor:mainTheme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: mainTheme.primary}}>Места где побывал рыбак</h1>
                    </div>
                    <div className="services-body">
                        <p style={{color:mainTheme.tertiary80}}>
                           Ниже продемонстрированы места где рыбак проявляет интелект и смекалку для ловли рыбы. Покоренные места с историей рыбалки.
                        </p>
                        <div className="services-bodycontainer">
                       
                        {sights.map((element, i) => {

                        //   return console.log(element.desc, i) 
                                return <SingleSight key = {i} img = {element.img} desc = {element.desc}/>
                       })} 
                                
                                
                           
                        </div>
                    </div>
                </div>
           
       </>
    )
}

export default Sights;