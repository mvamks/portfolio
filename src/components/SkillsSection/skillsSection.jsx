import { useEffect, useRef } from "react";
import { skills, categories } from "../../data/skillsData"; 
import { motion } from "framer-motion";
import "./skillsSection.scss";

const SkillsSection = () => {
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
            key={idx} 
            className="skills-category"
            ref={(el) => (categoryRefs.current[idx] = el)}
          >
            <h3>{category}</h3>
            <ul>
              {skills
                .filter(skill => skill.category === category)
                .map((skill, i) => (
                  <li key={i}>{skill.title} – {skill.text}</li>
                ))}
            </ul>
          </div>
        ))}
      
        <section className="skills-icons">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              className="skill-card"
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: { duration: 0.3 },
              }}
            > 
              <img src={skill.icon} alt={skill.alt} />
              <p>{skill.title}</p>
              <span className="category">{skill.category}</span>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
};

export default SkillsSection;
