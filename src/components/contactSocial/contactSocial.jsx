import LinkSocial from "../linkSocial/linkSocial";

import "./contactSocial.scss";

const ContactSocial = () => {

    return (
        <div className="contact__social">
            <h2 className="contact__social-title">Свяжитесь со мной</h2>
            <div className="divider"></div>
            <div className="contact__social-description">
                <p> Привет! 😊</p>
                <p> Если вы хотите со мной связаться, задать вопрос или просто поздороваться — я буду рада вашему сообщению.</p>
                <p>Заполните форму ниже и отправьте письмо, я обязательно отвечу как можно скорее!</p>
            </div>
            <LinkSocial variant="contact"/>
        </div>
        
    )
}

export default ContactSocial;

