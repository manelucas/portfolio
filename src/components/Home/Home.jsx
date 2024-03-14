import React from 'react'
import ProfileImage from '../../assets/profile_photo.png'
const Home = () => {
    return(
        <>
            <section className="row intro-container slide-left">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center gap-3">
                    <div className='pb-3'>
                        <img className="profile-img" loading="lazy" src={ProfileImage} alt="Profile image"/>
                    </div>
                    <h1 className="main-title">Software Developer</h1>            
                    <span className="d-block author fs-2">Manuel Lucas</span>
                    <p className="text-bold px-0">Check out below for more</p>
                    
                </div>
            </section>
        </>
    )
}

export default Home;