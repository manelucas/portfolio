import React, { useEffect, useRef, useState } from 'react'
import Card from './Card/Card'
import BoardImage from '../../assets/board_meetings_image.png'
import IotablImage from '../../assets/iotabl_1.png'
import No1SEImage from '../../assets/no1se.png'
import BeersApiImage from '../../assets/punk_api.png'
import CalculatorImage from '../../assets/calculator.png'

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            imageSrc: BoardImage,
            title: "Governance360",
            technologies: "React & Typescript, Laravel, Redux, MUI, Storybook.",
            description: `In my role, I am involved in every stage of the lifecycle of our web app, starting from ideation, through development, maintenance, testing, and bug fixing. I take charge of the technical aspects of our commercial website, leading its implementation, content management, optimization, and customization of modules, as well as maintenance and bug fixing. Additionally, I serve as a liaison between our technical team and the commercial team, ensuring that all requirements are understood and effectively translated into actionable technical solutions.`,
            links: [{ url: "https://www.governance360.com/", text: "Website" }],
            disclaimer: "* Web App & repo are private."
        },
        {
            id: 2,
            imageSrc: IotablImage,
            title: "Iotabl",
            description: `As the technical lead at Iotabl, I overseen the development of a two-sided IoT data collection platform. I've managed technical aspects, ensuring performance and scalability, collaborating with cross-functional teams, while driving innovation. I made critical decisions on the technology stack, system design, and feature prioritisation, aligning technical efforts with business goals. My role combined technical expertise, leadership, and collaboration to build and maintain a competitive IoT solution.`,
            technologies: "Vue & Laravel, CSS, Bootstrap, AWS, MySQL.",
            links: [{ url: "https://github.com/manelucas/iotabl", text: "Code" }],
            disclaimer: null
        },
        {
            id: 3,
            imageSrc: No1SEImage,
            title: "No1 South East",
            description: "Crafted the minimum viable product (MVP) for No1 South East, a dynamic web application catering to the South East London area's food enthusiasts. Development included essential features such as a search functionality, advanced filtering options, geolocation, and an admin panel.",
            technologies: "React, SASS, Firebase, API.",
            links: null,
            disclaimer: "* Repo is private."
        },
        {
            id: 4,
            imageSrc: BeersApiImage,
            title: "Beers API",
            description: "An early personal project representing my foray into REST API development and search functionality implementation, showcasing foundational skills in backend integration and data retrieval.",
            technologies: "React & CSS, Rest API.",
            links: [
                { url: "https://github.com/manelucas/beersAPI", text: "Code" },
                { url: "https://beer-api-713a5.web.app/", text: "Page" }
            ],
            disclaimer: null
        },
        // {
        //     id: 5,
        //     imageSrc: CalculatorImage,
        //     title: "Calculator",
        //     description: "The famous calculator project that every beginner goes through. This was one of my first projects that I completed during my coding bootcamp at Nology. This significantly bolstered my technical skills, offering invaluable confidence in problem-solving and software development.",
        //     technologies: "Vanilla JS, HTML, CSS.",
        //     links: [
        //         { url: "https://github.com/manelucas/calculator", text: "Code" },
        //         { url: "https://manelucas.github.io/calculator/", text: "Page" }
        //     ],
        //     disclaimer: null
        // }
      ];

      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); 
            }
          });
        }, { threshold: 0.2 }); 
    
        const elements = document.querySelectorAll('.card-wrapper');
        elements.forEach(element => observer.observe(element));
    
        return () => {
          elements.forEach(element => observer.unobserve(element));
        };
      }, []);


    return (
        <>
            <section id="projects">
                <div className="py-4 border-bottom">
                    <h2 className="mt-100">Projects</h2>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col">
                            {!!projectsData && projectsData.map((project, index) => (
                                <div key={index} className={`card-wrapper faded-animation ${isVisible ? 'visible' : ''} mb-5`}>
                                <Card imageSrc={project.imageSrc} links={project.links} title={project.title} description={project.description} technologies={project.technologies} disclaimer={project.disclaimer} />
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
          </section>
        </>
    )
}

export default Projects



