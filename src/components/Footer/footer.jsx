import { Link } from "react-router-dom";
import LinkSocial from "../linkSocial/linkSocial";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <nav className="footer__nav">
                <ul className="nav-list">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/aboutme">Обо мне</Link></li>
                    <li><Link to="/project">Проекты</Link></li>
                </ul> 
            </nav>
        
            <div className="footer__vertical"></div>

            <div className="footer__socials">
                <LinkSocial variant="footer"/>
            </div>
            <div className="footer__vertical"></div>

            <div className="footer__contacts">
                <h3>Контакты</h3>
                <p>Email: <a href="mailto:mvamks@gmail.com">mvamks@gmail.com</a></p>
                <p>Телефон: <a href="tel:+380971359985">+38(097) 135 99 85</a></p>
            </div>
        </div>

        <div className="footer__bottom">
            <p>© {new Date().getFullYear()} Валентина Константинова. Все права защищены.</p>
        </div>
    </footer>
  );
};

export default Footer;