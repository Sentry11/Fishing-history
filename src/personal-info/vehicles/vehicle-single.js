
import "./vehicle-single.scss"
import { mainTheme } from "../../data/theme"


const VehicleSingle = ({img, name, imgveh}) => {

    return(
    <div className="card-vehicle" style = {{backgroundColor: `${mainTheme.secondary}`}}>
      <div className="card-vehicle__side-v card-vehicle__side-v--front-v card-vehicle__side-v--front-1" >
        <div className="card-vehicle__description-v" >
          <header >
                <a href='#super' alt= ''>
                <img src={img} alt = ''/>
              </a>
              <h2>{name}</h2>
              </header>       
        </div>
      </div>
      <div className="card-vehicle__side-v card-vehicle__side-v--back-v card-vehicle__side-v--back-v-1">
        <div className="card-vehicle__description-v">
       
        <img 
        style={{ position: 'absolute',top: '0px', left: '0px', right: '0px',bottom: '0px', width:'100%', height:'100%', objectFit:'cover'}} 
        alt = '' 
        src={imgveh}/>
         </div>
      </div>
    </div>
    )

}

export default VehicleSingle;



