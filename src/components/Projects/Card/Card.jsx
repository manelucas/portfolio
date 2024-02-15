import React from 'react'

const Card = (props) => {


    const {imageSrc, title, description, technologies, links, disclaimer  } = props;
    
    return (        
        <div className="project-card d-flex g-2 flex-column justify-content-center">
            <div className="image-container">
                <h3 className='bold w-100 text-center pb-3'>{title}</h3>
                <img className="br-1 w-100 h-auto" loading="lazy" src={imageSrc} alt={`Image from the ${title} project`} />
                {!!links && (
                    <div className="py-4 row">
                        {links.map((link, index) => (
                            <div className={links.length > 1 ? 'col-6' : 'col-12'}>
                                <span key={index}>
                                    <a href={link.url} target="_blank" rel="noreferrer" className="w-100 btn btn-primary">{link.text}</a>
                                </span>
                            </div>
                        ))}
                        {!!disclaimer && (
                            <div className="pt-2">
                                <i>{disclaimer}</i>
                            </div>
                        )}  
                    </div>
                )}
            </div>
            <div className="col col-xs-12">
                <div className='d-flex flex-column'>
                    <span className='bold fs-5'>Description:</span>
                    <p className="p-0">{description}</p>
                </div>
                <div className='d-flex flex-column'>
                    <span className="bold fs-5">Technologies:</span>
                    <span className='fs-6'>{technologies}</span>
                </div> 
            </div>
        </div>
        
    )
}

export default Card