import React from 'react'

const Card = (props) => {
    
    const {imageSrc, title, description, technologies, links, disclaimer  } = props;
    
    return (        
        <div className='project-card position-relative'>
            <div className='card-image br-top'>            
                <img className="w-100 h-100 " loading="lazy" src={imageSrc} alt={`Image from the ${title} project`} />
            </div>
            <div className="card-bottom p-4">
             
                <div>
                    <h3 className='bold w-100'>{title}</h3>
                </div>

                <div className=''>
                    <span className='bold fs-5'>Description:</span>
                    <p className="p-0">{description}</p>
                </div>
                <div>
                    <span className="bold fs-5">Technologies:</span>
                    <p className='fs-6'>{technologies}</p>
                </div> 
                <div>
                    {!!disclaimer && (
                        <div className="py-2">
                            <i>{disclaimer}</i>
                        </div>
                    )}  
                    {!!links && (
                        <div className="pb-4 row">
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
        </div>
        
    )
}

export default Card