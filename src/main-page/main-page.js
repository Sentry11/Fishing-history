import Preview from "./preview/preview"
import Tabs from "./tabs/tabs";
import Slider from "./slider/slider";
import StartParallax from "./start-parallax/startParallax"

import { slides } from "../data/slides";




const MainPage = () => {

return(
    <>
       
        <Slider slides = {slides}/>
         <StartParallax/>
        <Tabs/>
        {/* <Preview/> */}
    </>
)
}

export default MainPage