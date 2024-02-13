import React from 'react'

const Card = (props) => {

    const {imageSrc, title, description, technologies, links, disclaimer  } = props;

    return (
        <div className="row p-5 project-card faded-animation hidden my-5 align-items-center ">
            <div className="col-xl-5 col-lg-12">
                <div className="image-container">
                    <img className="br-1 w-100 h-auto" loading="lazy" src={imageSrc} alt={`Image from the ${title} project`} />
                </div>
            </div>
            <div className="col-xl-7 col-lg-12">
                <h3>{title}</h3>
                <p className="p-0">{description}</p>
                <div>
                    <div>
                        <span className="text-bold">Technologies:</span>
                        <span>{technologies}</span>
                    </div>
                </div> 
                {!!links && (
                    <div className="mt-2 py-2 g-2 d-flex g-1 align-items-center">
                        {links.map((link, index) => (
                            <span key={index}>
                                <a href={link.url} target="_blank" rel="noreferrer" className="btn btn-primary">{link.text}</a>
                            </span>
                        ))}
                    </div>
                )}
                {!!disclaimer && (
                    <div className="pt-2">
                        <i>{disclaimer}</i>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card