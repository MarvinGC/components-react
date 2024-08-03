import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// miniaturas 
import proyectoEjemplo from '../assets/img/proyecto-ejemplo.png';

export const socialmedia = [
  {link: "https://www.facebook.com", icon: <FontAwesomeIcon className="icon" icon={faFacebook} />},
  {link: "https://www.instagram.com", icon: <FontAwesomeIcon className="icon" icon={faInstagram} />},
  {link: "https://www.youtube.com", icon: <FontAwesomeIcon className="icon" icon={faYoutube} />},
  {link: "https://www.linkedin.com", icon: <FontAwesomeIcon className="icon" icon={faLinkedin} />},
  {link: "https://github.com", icon: <FontAwesomeIcon className="icon" icon={faGithub} />}
]

export const projects = [
  {image: proyectoEjemplo, description: "Descripción", url: "#"}
]