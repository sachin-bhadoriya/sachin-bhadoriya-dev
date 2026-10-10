const ProjectCard = ({
    title,
    description,
    img,
    tags,
    liveLink,
    githubLink
}) => {
    return (
        <div data-aos="zoom-in" className="project-card">
            <div className="project-img-wrapper">
                <img src={img} alt={title} />
            </div>

            <div className="project-details">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="project-tags">
                    {tags?.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={liveLink} target="_blank" rel="noreferrer" className="btn live-btn">
                        Demo
                    </a>

                    <a href={githubLink} target="_blank" rel="noreferrer" className="btn github-btn">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard
