import React from 'react'
import './Home.css';

const Home = () => {
    return(
        <>
            <section className="row intro-container slide-left">
                <div className="h-100 d-flex align-items-center">
                    <div>
                        <h1 className="main-title"><span id="hello" className="mr-2"></span>Welcome to my website.
                            <span className="d-block mt-2 author">Manuel Lucas | Software Developer</span>
                        </h1>            
                        <p className="text-bold px-0">Check out below</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;