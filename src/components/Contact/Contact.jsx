import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="row">
                    <div className="pt-2">
                        <h2>
                            Get in touch
                        </h2>
                    </div>    
                    <div className='d-flex flex-column g-3'>
                        <p>
                        If you have any questions, inquiries, or just want to say hello, feel free to reach out to me at: 
                        </p>
                        <span className='d-flex g-3 align-items-center'>
                        <i class="fa-solid fa-envelope text-white fs-5"></i>
                            <a href="mailto:manelglucas@gmail.com" className="text-white fs-5">manelglucas@gmail.com</a>
                        </span>
                    </div>    
                </div>   
            </section>
        </>
    )
}

export default Contact