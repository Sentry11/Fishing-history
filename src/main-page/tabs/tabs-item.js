import './tabs-items.scss'
import { Link } from 'react-router-dom';

const TabsItem = ({name, desc, photo,personid}) => {

    return(
            <div className="grid_tab">  
            <div className="grid_tab__item_tab">      
            <div className="card_tab">
               <img className='card_tab__img_tab' src = {photo} alt = 'alt'/>
               <div className="card_tab__content_tab">
                     <h1 className='card_tab__header_tab'> {name}</h1>
                     <p className='card_tab__text_tab'> | {desc} | </p>
                     <Link style = {{textDecoration: 'none'}} to = {`/person/${personid}`}> <button className='card_tab__btn_tab'>Посмотреть на чмоню</button></Link>
                     </div>   
                     </div>
            </div>
            </div>

    )
 }
    
    export default TabsItem;