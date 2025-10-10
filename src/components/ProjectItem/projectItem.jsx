import { useRef, useEffect} from "react";
import arrowIcon from "../../assets/icons/arrow.svg";
import "./projectItem.scss";



const ProjectItem = ({ item, isOpen, onToggle }) => {
    const itemRef = useRef(null);


    useEffect (() => {
        const handleClickOutside = (e) => {
            if(isOpen && itemRef.current && !itemRef.current.contains(e.target)) {
                onToggle();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [isOpen, onToggle]);


    return (
        <div className="project__item" ref={itemRef}>
            <button 
                className={`open-btn ${isOpen ? "active" : ""}`} 
                onClick={onToggle}
            >
                Информация о работе
                <img className="open-btn__icon" src={arrowIcon} alt="arrow"/>
            </button>

            <div className={`img-box ${isOpen ? "dimmed" : ""}`}>
                <img
                   src={item.img}
                   alt={item.alt}
                   className={"project__item-img"}
                />
            </div>

            <div className={`project__item-hidden ${isOpen ? "open" : ""}`}>
                <h3 className="project__item-name">{item.name}</h3>
                <a 
                    className=" project__btn btn" 
                    href={item.src}
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    Смотреть
                </a>
                <p>{item.text}</p>
            </div>
        </div>
    );
};

export default ProjectItem;

