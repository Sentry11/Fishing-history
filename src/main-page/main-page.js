import Preview from "../preview/preview";
import Tabs from "../tabs/tabs";

import Slider from "../slider/slider";

import { slides } from "../data/slides";




const MainPage = () => {
return(
    <>
        <Slider slides = {slides}/>
        <Tabs/>
        <Preview/>
    </>
)
}

export default MainPage