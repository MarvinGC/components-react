import './Socialicon.css';

const SocialIcon = ({link, icon}) => {
  return (
    <div className="social-icon">
        <a href={link} target="_balnk">
            {/* El obejto icon contiene la clase icon del css*/}
            {icon}
        </a>
    </div>
  )
}

export default SocialIcon;
