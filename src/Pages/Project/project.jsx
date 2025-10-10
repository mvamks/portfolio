import { useState } from "react";
import { project } from "../../data/skillsData";
import ProjectItem from "../../components/ProjectItem/projectItem";
import LinkSocial from "../../components/linkSocial/linkSocial";

import "./project.scss";


const Project = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="project">
            <LinkSocial variant="vertical"/>
            <div className="container">
                <h2 className="title title_fs26 project__title">Мои работы</h2>
                <div className="divider"></div>
                <div className="project__box">
                    {project.map((item, idx) => (
                        <ProjectItem
                            key={idx}
                            item={item}
                            isOpen={openIndex === idx}
                            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />      
                    ))}
                </div>
            </div>
        </section>   
    );     
};

export default Project;