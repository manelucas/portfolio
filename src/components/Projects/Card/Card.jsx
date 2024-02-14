import React from 'react'

const Card = (props) => {


    const {imageSrc, title, description, technologies, links, disclaimer  } = props;
    
    return (        
        <div className="project-card p-5 align-items-center">
            <div className="col-12">
                <h3 className='bold'>{title}</h3>
            </div>            
            <div className="row py-4">
                <div className="col-auto">
                    <div className="image-container">
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
                            </div>
                        )}
                    </div>
                </div>
                <div className="col">
                    <p className="p-0">{description}</p>
                    <div className='d-flex g-3'>
                        <span className="text-bold">Technologies:</span>
                        <span>{technologies}</span>
                    </div> 
                    {!!disclaimer && (
                        <div className="pt-2">
                            <i>{disclaimer}</i>
                        </div>
                    )}  
                </div>
            </div>
        </div>
        
    )
}

export default Card