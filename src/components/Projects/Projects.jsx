import React, { useEffect, useRef, useState } from 'react'
import Card from './Card/Card'
import Governance360 from '../../assets/governance360.png'
import IotablImage from '../../assets/iotabl_1.png'
import No1SEImage from '../../assets/no1se.png'
// import BeersApiImage from '../../assets/punk_api.png'
import Weather from '../../assets/weather.png'
import CalculatorImage from '../../assets/calculator.png'
import MorseCodeImage from '../../assets/morse_code.png'

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            imageSrc: Governance360,
            title: "Governance360",
            technologies: "React & Typescript, Laravel, Redux, MUI, Storybook.",
            description: `Involved in every stage of the lifecycle of our web app, starting from ideation, through development of key features, maintenance, testing, and bug fixing. Also have led the technical architecture of our commercial website.`,
            links: [{ url: "https://www.governance360.com/", text: "Website" }],
            disclaimer: "* Web App & repo are private."
        },
        {
            id: 2,
            imageSrc: IotablImage,
            title: "Iotabl",
            description: `Overseen the development of a two-sided IoT data collection platform. I have managed technical aspects, ensuring performance and scalability. I made critical decisions on the technology stack, system design, and feature prioritisation, aligning technical efforts with business goals.`,
            technologies: "Vue & Laravel, CSS, Bootstrap, AWS, MySQL.",
            links: [{ url: "https://github.com/manelucas/iotabl", text: "Code" }],
            disclaimer: null
        },
        {
            id: 3,
            imageSrc: No1SEImage,
            title: "No1 South East",
            description: "Development included essential features such as a search functionality, advanced filtering options, geolocation, and an admin panel.",
            technologies: "React, SASS, Firebase, API.",
            links: null,
            disclaimer: "* Repo is private."
        },
        // {
        //     id: 3,
        //     imageSrc: No1SEImage,
        //     title: "No1 South East",
        //     description: "Development included essential features such as a search functionality, advanced filtering options, geolocation, and an admin panel.",
        //     technologies: "React, SASS, Firebase, API.",
        //     links: null,
        //     disclaimer: "* Repo is private."
        // },
        {
            id: 4,
            imageSrc: Weather,
            title: "Weather App",
            description: "A little practice of using a REST API and display its data. Find the current weather from any part of the world!",
            technologies: "Vite Vue, Boostrap, CSS, Rest API",
            links: [
                { url: "https://github.com/manelucas/beersAPI", text: "Code" },
                { url: "https://github.com/manelucas/weather-checker/", text: "Page" }
            ],
            disclaimer: null
        },
        {
            id: 5,
            imageSrc: CalculatorImage,
            title: "Calculator",
            description: "The famous calculator project that every beginner goes through. This was one of my first projects that I completed during my coding bootcamp at Nology. This significantly bolstered my technical skills, offering invaluable confidence in problem-solving and software development.",
            technologies: "Vanilla JS, HTML, CSS.",
            links: [
                { url: "https://github.com/manelucas/calculator", text: "Code" },
                { url: "https://manelucas.github.io/calculator/", text: "Page" }
            ],
            disclaimer: null
        },
        {
            id: 6,
            imageSrc: MorseCodeImage,
            title: "Morse code translator",
            description: "Converts text to Morse code and vice versa. Developed using HTML, CSS, and JavaScript. This was a challenge as part of the technical bootcamp at nology, and has contrubuted to refining my skills in data manipulation, and structured data handling.",
            technologies: "Vanilla JS, HTML, CSS.",
            links: [
                { url: "https://github.com/manelucas/translation_english_to_morse", text: "Code" },
                { url: "https://manelucas.github.io/translation_english_to_morse/", text: "Page" }
            ],
            disclaimer: null
        }
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
                <h2 className="mt-100">Projects & work</h2>
            </div>
            <div className="content-section">
              <div className="row">
                {!!projectsData && projectsData.map((project, index) => (
                  <div className="col-xs-12 col-lg-6">
                    <div className={`card-wrapper faded-animation ${isVisible ? 'visible' : ''} mb-5`}>
                      <Card imageSrc={project.imageSrc} links={project.links} title={project.title} description={project.description} technologies={project.technologies} disclaimer={project.disclaimer} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
    )
}

export default Projects



