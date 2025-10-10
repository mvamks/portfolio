import ContactForm from "../../components/contactForm/contactForm";
import ContactSocial from "../../components/contactSocial/contactSocial";

import "./contacts.scss";

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <ContactForm/>
                    <ContactSocial/>   
                </div>
            </div>      
        </section>
    );     
};

export default Contacts;