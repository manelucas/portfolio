import React from 'react'

const Card = ({ image, title, description, technologies = [], links = [], disclaimer }) => {

    const primaryLink = links[0];
    const imageEl = <img src={image} alt={`Screenshot of ${title}`} className="project-card__img" loading="lazy" />;

    return (
        <article className="project-card">
            {primaryLink ? (
                <a href={primaryLink.url} target="_blank" rel="noreferrer" className="project-card__image">
                    {imageEl}
                </a>
            ) : (
                <div className="project-card__image">
                    {imageEl}
                </div>
            )}
            <div className="project-card__body">
                <h3>{title}</h3>
                <p className="project-card__description">{description}</p>

                {technologies.length > 0 && (
                    <ul className="tag-list">
                        {technologies.map(tech => (
                            <li key={tech} className="tag">{tech}</li>
                        ))}
                    </ul>
                )}

                <div className="project-card__links">
                    {links.map((link, index) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={index === 0 ? 'btn-accent' : 'btn-outline'}>
                            {link.text}
                        </a>
                    ))}
                    {!!disclaimer && (
                        <span className="disclaimer">
                            <i className="fa-solid fa-lock"></i> {disclaimer}
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}

export default Card
