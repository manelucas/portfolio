import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='pt-4'>
                <div className="row g-2 mt-2 border-top justify-content-between">
                    <div className='col-12 py-4'>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className='bold fs-4'>Manuel Lucas</span>
                            <div className='d-flex g-1'>
                                <a href="https://www.linkedin.com/in/manuel-krus-galvao-lucas-821b091a2/" target="_blank" rel="noreferrer" className="text-primary fs-4 pl-4 d-flex g-2 align-items-center text-decoration-none py-2">
                                    <span className="icon-container">
                                        <i className="fab fa-linkedin-in fs-1 text-white"></i>
                                    </span>
                                </a>
                                <a href="https://github.com/manelucas" target="_blank" rel="noreferrer" className="text-primary fs-4 pl-4 d-flex g-2 align-items-center text-decoration-none py-2">
                                    <span className="icon-container">
                                        <i className="fab fa-github fs-1 text-white"></i>  
                                    </span> 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>  
            </footer>
        </>
    )
}

export default Footer