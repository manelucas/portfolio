import React from 'react'
import Card from './Card/Card'
import BoardImage from '../../assets/board_meetings_image.png'
import IotablImage from '../../assets/iotabl_1.png'
import No1SEImage from '../../assets/no1se.png'
import BeersApiImage from '../../assets/punk_api.png'
import CalculatorImage from '../../assets/calculator.png'

const Projects = () => {
    return (
        <>
            <section id="projects">
                <div className="py-4 border-bottom">
                    <h2 className="mt-100">Projects</h2>
                </div>
                <div className="content-section">
                    <Card 
                        imageSrc={BoardImage} 
                        title="Governance360" 
                        technologies="React & Typescript, Laravel, Redux, MUI, Storybook." 
                        description="Subscription based web app* that provides management tools dedicated to Board directors and SMEs." 
                        links={[{ url: "https://www.governance360.com/", text: "Website" }]} 
                        disclaimer="* Web App & repo are private."
                    />

                    <Card
                        imageSrc={IotablImage} 
                        title="Iotabl" 
                        description="Technical lead at Iotabl - a two-sided data collection platform for the Internet of Things." 
                        technologies="Vue & Laravel, CSS, Bootstrap, AWS, MySQL." 
                        links={[{ url: "https://github.com/manelucas/iotabl", text: "Code" }]} 
                    />

                    
                    <Card
                        imageSrc={No1SEImage} 
                        title="No1 South East" 
                        description="Web app* that provided food offers & discounts from small venues in the South East of London." 
                        technologies="React, SASS, Firebase, API." 
                        disclaimer="* Repo is private."
                    />  

                    <Card
                        imageSrc={BeersApiImage} 
                        title="Beers API" 
                        description="One of my first personal projects to practice the Rest API and search term." 
                        technologies="React & CSS, Rest API." 
                        links={[{ url: "https://github.com/manelucas/beersAPI", text: "Code" }, {url: "https://beer-api-713a5.web.app/", text: "Page"}]} 
                    />
                        

                    <Card
                        imageSrc={CalculatorImage} 
                        title="Calculator" 
                        description="The famous calculator project that every beginner goes through. Equally, this was one of my first projects that I completed during my coding bootcamp at Nology. While this isn't the most useful kind of page, it really helped me improve my technical skills." 
                        technologies="Vanilla JS, HTML, CSS." 
                        links={[{ url: "https://github.com/manelucas/calculator", text: "Code" }, {url: "https://manelucas.github.io/calculator/", text: "Page"}]} 
                    />
                 </div>
          </section>
        </>
    )
}

export default Projects