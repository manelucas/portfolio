import React from 'react'

const Card = ({ image, title, description, technologies = [], link }) => {

    return (
        <article className={`project-card${link ? ' project-card--linked' : ''}`}>
            <div className="project-card__image">
                <img src={image} alt={`Screenshot of ${title}`} className="project-card__img" loading="lazy" />
            </div>
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

                {link && (
                    <div className="project-card__links">
                        {/* Its ::after overlay stretches over the card, making the whole card clickable */}
                        <a href={link.url} target="_blank" rel="noreferrer" className="btn-accent project-card__link">
                            {link.text}
                        </a>
                    </div>
                )}
            </div>
        </article>
    )
}

export default Card
