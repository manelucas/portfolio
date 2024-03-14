import React from 'react'
import ProfileImage from '../../assets/profile_photo.png'

const About = () => {
    return(
        <>
            <section id="about">
              <div className="py-2 border-bottom">
                  <h2>
                      About
                  </h2>
              </div>
              <div className="content-section">
                  <div className="d-flex g-1 align-items-center pb-4 md-flex-column">
                      {/* <img className="profile-img" loading="lazy" src={ProfileImage} alt="Profile image"/> */}
                        <p>
                            Olá! <br/> I am a Portuguese native who has called Bristol home since 2013.
                            To enhance my skills in tech, I enrolled on two coding bootcamps where I delved deeply into web development. Through this course and development of personal projects, I acquired technical skills that enabled me to build projects from start to deployment. 
                        </p>
                  </div>
                  <p>
                  I work in software development with a strong interest on design, ideation, UX, and accessibility. My work experience encompasses both frontend and backend web development, from code architechture to the development of new features, maintenance, testing and bug fixing.
                  </p>
                  <p>
                  In 2022, I embraced a new challenge by co-founding and assuming the role of technical lead at a cybersecurity startup - Iotabl. This venture provided me with invaluable experience in agile methodology, sprint planning, and leading the code architecture.
                  </p>
                  <p>
                  Over the past year, I've been a pivotal member of the Governance360 team, implementing the development of intricate features within our application while also spearheading the ongoing enhancement and maintenance of our commercial website.
                  </p>
              </div>
          </section>
        </>
    )
}

export default About;