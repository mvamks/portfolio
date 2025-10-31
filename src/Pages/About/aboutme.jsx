import { useState, useEffect } from "react";
import { skills, categories, aboutInfo } from "../../data/skillsData.jsx";
import SkillsSection from "../../components/SkillsSection/skillsSection";
import LinkSocial from "../../components/linkSocial/linkSocial.jsx";
import "./aboutme.scss";


const Aboutme = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);
    
    return (
       <section className="aboutme">
        <LinkSocial variant="vertical"/>
            <div className="container">
                <div className="aboutme__wrapper">
                    <div className="aboutme__photo aboutme__left">
                        <div className="aboutme__photo-wrapper">
                            <img src="my_main.jpg" alt="myphoto"/>
                        </div>  
                    </div>
                    <div className="aboutme__wrapper-title" >
                        <div>
                            <h2 className="title title_fs26 aboutme__title">Обо мне</h2>
                            <div className="divider"></div>
                        </div>
                            
                            <a href={aboutInfo.resume} className="btn" download>
                        📄 Скачать резюме
                        </a>
                    </div>
                    <div className="aboutme__descr aboutme__right1">
                       
                        
                        {isMobile ? (
                            aboutInfo.description480.map((text, index) => (
                             index === 0 ? (
                                <p key={index} className="aboutme__text aboutme__text-first">{text}</p>
                                ) : (
                                    <p key={index} className="aboutme__text">{text}</p>
                                )
                            ))
                        ) : 
                            (aboutInfo.description.map((text, index) => (
                                index === 0 ? (
                                    <p key={index} className="aboutme__text aboutme__text-first">{text}</p>
                                ) : (
                                    <p key={index} className="aboutme__text">{text}</p>
                                )
                            )))
                        }   
                    </div>
                    <div className="aboutme__right2">
                        <h2 className="title title_fs26 aboutme__title">Мои навыки</h2>
                        <div className="divider"></div>
                    </div>
                   
                    <div className="aboutme__skills aboutme__bottom">
                         <SkillsSection isMobile={isMobile} skills={skills} categories={categories}/>
                    </div> 
                </div>
            </div>
        </section> 
    );
};

export default Aboutme;