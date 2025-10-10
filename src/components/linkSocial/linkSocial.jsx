import { socialLinks } from "../../data/socialData";
import "./linkSocial.scss";

const LinkSocial = ({variant}) => {
  return (
    <div className={`social__wrapper social__wrapper-${variant}`}>
      {socialLinks.map(item =>  {
        const Icon = item.icon
        return (
          <a className="menu__icon" key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon className="social-icon"/>
          </a>
        );
      })}
    </div>
  );    
    
}

export default LinkSocial;