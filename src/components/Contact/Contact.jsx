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
                    <div className='d-flex g-3 align-items-center'>
                        <p className='p-0 m-0'>
                        If you have any questions, inquiries, or just want to say hello, feel free to reach out to me at: 
                        </p>
                        <span className='pl-2 ml-2'>
                            <a href="mailto:manelglucas@gmail.com" className="text-white fs-5">manelglucas@gmail.com</a>
                        </span>
                    </div>    
                </div>   
            </section>
        </>
    )
}

export default Contact