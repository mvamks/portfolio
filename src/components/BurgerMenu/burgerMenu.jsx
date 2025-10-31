import { stack as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './burgerMenu.scss';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const menuRef = useRef(null);
    const isOpenRef = useRef(isOpen);
    const prevActiveEl = useRef(null);

    useEffect(() => {
        isOpenRef.current = isOpen;
    }, [isOpen])

    
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

        const handleKey = (e) => {
            if(e.key === "Escape" && isOpenRef.current) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("keydown", handleKey);
        };  
    }, []);

    useEffect(() => {
        if(isOpen) {
            prevActiveEl.current = document.activeElement;
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                const first = menuRef.current?.querySelector(".menu-item");
                if(first) first.focus();
            }, 0);
        } else {
            document.body.style.overflow = "";

            if (prevActiveEl.current && prevActiveEl.current.focus) {
                prevActiveEl.current.focus();
            }
        }
        return () => {document.body.style.overflow = ""};
    }, [isOpen]);

    const handleStateChange = (state) => setIsOpen(state.isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div ref={menuRef}>
            <Menu 
                right 
                width={280}
                styles={{
                    bmCross: { width: '4px', height: '25px', right: '5px', }
                }}
                isOpen={isOpen}
                onStateChange={handleStateChange}  
                aria-expanded={isOpen}
                aria-controls="main-menu"
                itemListElement="div"
            >
                <nav id="main-menu" aria-hidden={isOpen}>
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

