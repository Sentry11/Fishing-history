
import { fishermen } from '../data/fishermen';
import { mainTheme } from '../data/theme';

import TabsItem from './tabs-item';


import './tabs.scss'

const Line = () => {
  return(
        <div className="line-styling">
            <div className="style-circle" style={{backgroundColor: mainTheme.tertiary}}></div>
            <div className="style-circle" style={{backgroundColor: mainTheme.tertiary}}></div>
            <div className="style-line" style={{backgroundColor: mainTheme.tertiary}}></div>
        </div>
  )
}

const Tabs = () => {
return(

    <>
   
    <div className="main_tab">
   
 
     <Line/>
    {fishermen.map((elements, key) => {
    
        return(
      // console.log(elements.name, 'and their key= ', key);
      // <Link  to = {`/person/${elements.id}`}>  </Link>
           
          <TabsItem key = {key}  name = {elements.name} desc = {elements.about} personid = {elements.id}/> 
        )
     
   })} 

    
   </div>

   <Line/>
</>
)
}

export default Tabs;