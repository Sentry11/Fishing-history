
import "./fisherman-tools-items.scss"
import { mainTheme } from "../../data/theme"


const FishermanToolsItems = ({img, name, imgback }) => {

    return(
    <div className="card" style = {{backgroundColor: `${mainTheme.secondary}`}}>
      <div className="card__side card__side--front card__side--front-1" >
        <div className="card__description" >
          <header >
                <a href='#super' alt= ''>
                <img src={img} alt = ''/>
              </a>
              <h2>{name}</h2>
              </header>       
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__description">
       
        <img 
        style={{ position: 'absolute',top: '0px', left: '0px', right: '0px',bottom: '0px', width:'100%', height:'100%', objectFit:'cover'}} 
        alt = '' 
        src= {imgback}/>
         </div>
      </div>
    </div>
    )

}

export default FishermanToolsItems;