import React from 'react'

const Card = (props) => {
    
    const {imageSrc, title, description, technologies, links, disclaimer  } = props;
    
    const hasWebsite = !!links && links.some(l => l.text === "Website" || l.text === "Page") || null;
    const getLink = !!links && links.find(l => l.text === "Website" || l.text === "Page" )
    console.log(getLink);
    return (        
        <div className='project-card position-relative'>
            {/* <div className='card-image br-top'>            
                <img className="w-100 h-100 " loading="lazy" src={imageSrc} alt={`Image from the ${title} project`} />
            </div> */}
            {hasWebsite ? (
                <a href={getLink.url} target='_blank' rel="noreferrer">
                    <div class="card-header">
                        <img src={imageSrc} alt="Card Image" class="card-img-header"/>
                    </div>
                </a>
            ) : (
                <div class="card-header not-allowed">
                    <img src={imageSrc} alt="Card Image" class="card-img-header"/>
                </div>
            )}
            <div className="card-bottom p-4">
                <div>
                    <h3 className='bold w-100'>{title}</h3>
                </div>

                <div>
                    <span className='bold fs-5'>Description:</span>
                    <p className="p-0">{description}</p>
                </div>
                <div>
                    <span className="bold fs-5">Technologies:</span>
                    <p className='fs-6'>{technologies}</p>
                </div> 
                <div>
                    {!!links && (
                        <div className="py-2 row">
                            {links.map((link, index) => (
                                <div key={index} className={links.length > 1 ? 'col-6' : 'col-12'}>
                                    <span key={index}>
                                        <a href={link.url} target="_blank" rel="noreferrer" className="w-100 btn btn-primary">{link.text}</a>
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {!!disclaimer && (
                        <div className='pb-2'>
                            <button disabled className='btn btn-light w-100'>{disclaimer}</button>
                        </div>
                    )}  
                </div>
            </div>
        </div>
        
    )
}

export default Card