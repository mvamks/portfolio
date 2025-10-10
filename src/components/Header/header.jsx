import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/burgerMenu";

import "./header.scss";


const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/aboutme">Обо мне</Link></li>
                    <li><Link to="/project">Проекты</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul> 
            </nav>
            <BurgerMenu/>
        </header>
    )
}

export default Header;