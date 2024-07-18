import './Project.css';

const Project = ({image, description, url}) => {
  return (
    <div className="project">
        <img src={image} alt="project1"/>
        <div className="project-description">
            <div>{description}</div>
        </div>
        <a href={url} target="_blank"><span className="link-project"></span></a>
    </div>
)
}

export default Project