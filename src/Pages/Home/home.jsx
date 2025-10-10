import Typewriter from 'typewriter-effect';
import headerBg from "../../assets/img/header2.png";

import "./home.scss";


const Home = () => {
    const textLines = [
        "Привет, я Валентина",
        "начинающий Frontend Developer"
    ];

    return (
        <section className="home">
            <img src={headerBg} alt="header image" />        
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
                    <a href="/project" className="btn">Мои проекты</a>
                    <a href="/contacts" className="btn">Контакты</a>
                </div> 
            </div>
        </section>
    )
}

export default Home;