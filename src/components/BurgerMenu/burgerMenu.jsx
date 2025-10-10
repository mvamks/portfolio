import { stack as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './burgerMenu.scss';
import { div } from 'framer-motion/client';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const menuRef = useRef(null);

    const handleStateChange = (state) => setIsOpen(state.isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if ( 
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !e.target.closest(".bm-burger-button")
            ) {
                setIsOpen(false);
            }
        };

        if(isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown",handleClickOutside);
        }

        return () => document.removeEventListener("mousedown",handleClickOutside);
    }, [isOpen]);

    return (
        <div ref={menuRef}>
            <Menu 
                right 
                width={280}
                isOpen={isOpen}
                onStateChange={handleStateChange}  
                aria-expanded={isOpen}
                aria-controls="main-menu"
                itemListElement="div"
            >
                <nav id="main-menu">
                    <NavLink className="menu-item" to="/" onClick={closeMenu}>Главная</NavLink>
                    <NavLink className="menu-item" to="/aboutme" onClick={closeMenu}>Обо мне</NavLink>
                    <NavLink className="menu-item" to="/project" onClick={closeMenu}>Проекты</NavLink>
                    <NavLink className="menu-item" to="/contacts" onClick={closeMenu}>Контакты</NavLink>
                </nav> 
            </Menu>
        </div>
        
    )
}

export default BurgerMenu;

