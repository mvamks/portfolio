import useViewport from "../../hooks/useIsMobile";
import ContactForm from "../../components/contactForm/contactForm";
import ContactSocial from "../../components/contactSocial/contactSocial";

import "./contacts.scss";

const Contacts = () => {
    const { isMobile, isTablet, deviceType } = useViewport();
    console.log("contacts:", { isMobile, isTablet, deviceType });

    return (
        <section className="contacts">
            <div className="container">
                {isMobile &&  (
                    <div className="contacts__wrapper">
                        <ContactSocial/>  
                        <ContactForm/> 
                    </div>
                )}

                {isTablet &&  (
                    <div className="contacts__wrapper">
                        <ContactSocial/>  
                        <ContactForm/> 
                    </div>
                )}

                {!isMobile && !isTablet && (
                    <div className="contacts__wrapper">
                        <ContactForm/>
                        <ContactSocial/>   
                    </div>
                )}
            </div>      
        </section>
    );     
};

export default Contacts;