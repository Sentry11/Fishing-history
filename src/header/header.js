import { Link } from 'react-router-dom';
import "./header.scss"


  const Header = () =>  {
      return (  
        <div className="header">
          <div className="header__section">
          <div className="header_item ">
          <Link className="nav_link"   to = "/">
            Главная
            </Link>
          </div>
          <div className="header_item ">
            Рыбаки 
          </div>
          <div className="header_item ">
           Моменты
          </div>
          <div className="header_item ">
             В розработке
          </div>
          </div>
        </div>
       )
  }
  
  export default Header;