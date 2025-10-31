import { useEffect, useRef } from "react";
import { skills, categories } from "../../data/skillsData"; 
import { motion } from "framer-motion";
import "./skillsSection.scss";

const SkillsSection = ({isMobile}) => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, index * 400)
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2}
    );
       // подписываемся только на существующие элементы
    categoryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <section className="skills-section">
        {categories.map((category, idx) => (
          <div 
            className={`skills-category ${isMobile ? 'mobile' : ''}`}
            key={idx}
            ref={(el) => (categoryRefs.current[idx] = el)}
          >
            

            {isMobile && (
              <>
              <h3 className="skills-category__title">{category}</h3>
              <section className="skills-icons">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, i) => (
                    <div key={i} className="skill-card"> 
                      <img src={skill.icon} alt={skill.alt} />
                      <p>{skill.title}</p>
                      <span className="category">{skill.category}</span>
                    </div>
                  ))}
              </section>
              <ul className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, i) => (
                    <li key={i} className="skills-list__item">
                      <strong>{skill.title}</strong> — {skill.text}
                    </li>
                  ))}
              </ul>
              </>
              
            )}

            {!isMobile && (
              <ul className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, i) => (
                    <li key={i} className="skills-list__item">
                      <strong>{skill.title}</strong> — {skill.text}
                    </li>
                  ))}
              </ul>
            )}
        </div>
      ))}
      
       {!isMobile && (
        <section className="skills-icons skills-icons--all">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-card"
              whileHover={{
                scale: 1.05,
                opacity: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <img src={skill.icon} alt={skill.alt} />
              <p className="skill-card__title">{skill.title}</p>
              <span className="skill-card__cat">{skill.category}</span>
            </motion.div>
          ))}
        </section>
      )}
      </section>
    </>
  );
};

export default SkillsSection;
