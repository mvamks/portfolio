import { useRef, useEffect} from "react";
import arrowIcon from "../../assets/icons/arrow.svg";
import "./projectItem.scss";



const ProjectItem = ({ item, isOpen, onToggle }) => {
    const itemRef = useRef(null);
    const imgLinkRef = useRef(null);
    const btnLinkRef = useRef(null);



    useEffect (() => {
        const handleClickOutside = (e) => {
            if (!isOpen) return;

            if(itemRef.current?.contains(e.target) ||
                btnLinkRef.current?.contains(e.target) ||
                imgLinkRef.current?.contains(e.target)) {
                return;   
            }
            
            onToggle();
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
                <a 
                    className="img-box__link"
                    ref={imgLinkRef}
                    href={item.src}
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    <img
                        className={"project__item-img"}
                        src={item.img}
                        alt={item.alt}
                        
                    />
                </a>
            </div>

            <div className={`project__item-hidden ${isOpen ? "open" : ""}`}>
                <h3 className="project__item-name">{item.name}</h3>
                <a 
                    ref={btnLinkRef}
                    className=" project__item-btn btn" 
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

