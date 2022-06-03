
import PersonalInfo from "../personal-info/personal-info";
import MainPage from "../main-page/main-page";
import Header from "../header/header"
import Footer from "../footer/footer"

import { BrowserRouter as Router, Route , Routes, } from "react-router-dom";





const App = () => {
    return(
    <Router>
       <Header/> 
           <Routes>
      
              <Route path = "/" element = { <MainPage/>}/>          
              <Route  path = "/person/:Id" element = {<PersonalInfo/>}  />
          
          </Routes>
          <Footer/>
    </Router>
    )
}

export default App;