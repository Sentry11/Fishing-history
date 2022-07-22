import Preview from "../preview/preview";
import Tabs from "../tabs/tabs";
import Slider from "../slider/slider";
import StartParallax from "../start-parallax/startParallax";

import { slides } from "../data/slides";




const MainPage = () => {

return(
    <>
        <StartParallax/>
        <Slider slides = {slides}/>
        <Tabs/>
        <Preview/>
    </>
)
}

export default MainPage