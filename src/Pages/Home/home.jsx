import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import headerBg from "../../assets/img/header.webp";
import { Link } from "react-router-dom";

import "./home.scss";


const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const textLines = [
        "Привет, я Валентина",
        "начинающий Frontend Developer"
    ];

    const changeBg =() => setLoaded(true);
    const handleError = () => setError(true);

    return (
        <section 
            className="home"
            style={{
                backgroundColor: loaded ? 'black' : 'black',
            }}
        >
            {!error && (
                <img 
                src={headerBg} 
                alt="header image"
                className={`home__bg ${loaded ? "visible" : ""}`}
                onLoad={changeBg}
                onError={handleError}
            />        
            )}
            
            <div className="home__content">
               <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`<h1>${textLines[0]}</h1>`)
                            .pauseFor(300)
                            .typeString(`<h2>${textLines[1]}</h2>`)
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: false,
                        deleteSpeed: 0,
                        cursor: "",
                        wrapperClassName: "", // чтобы Typewriter не оборачивал в span
                    }}
                />
                <div className="btn-group">
                    <Link to="/project" className="btn">Мои проекты</Link>
                    <Link to="/contacts" className="btn">Контакты</Link>
                </div> 
            </div>
        </section>
    )
}

export default Home;