import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" class="container">
                <div class="py-4 border-bottom">
                    <h1 class="mt-100">
                        Contact
                    </h1>
                </div>
                <div class="d-flex flex-column py-3">
                    <div class="col-12">
                        <p>If you have any questions, inquiries, or just want to say hello, feel free to reach out to me via email.</p>    
                    </div>
                    <a href="mailto:manelglucas@gmail.com" class="btn-primary btn-cta text-decoration-none">Get in touch</a>
                </div>

                <div class="row g-2 mt-2">
                    <p class="pt-3 mb-0">
                        Alternatively, visit out one of the following to find out more:
                    </p>      
                    <div class="col-12 mt-0">
                        <a href="https://www.linkedin.com/in/manuel-krus-galvao-lucas-821b091a2/" target="_blank" rel="noreferrer" class="text-primary fs-4 pl-4 d-flex g-2 align-items-center text-decoration-none py-2">
                            <span class="icon-container">
                                <i class="fab fa-linkedin-in fs-1 text-white"></i>
                            </span>
                            My LinkedIn profile
                        </a>
                    </div>
                    <div class="col-12 mt-0">
                        <a href="https://github.com/manelucas" target="_blank" rel="noreferrer" class="text-primary fs-4 pl-4 d-flex g-2 align-items-center text-decoration-none py-2">
                            <span class="icon-container">
                                <i class="fab fa-github fs-1 text-white"></i>  
                                {/* <FontAwesomeIcon icon={faCoffee} />   */}
                            </span>
                            Github
                        </a>
                    </div>
                </div>     
            </section>
        </>
    )
}

export default Contact