import NestCarouselImage from '../assets/nextcarousel_1.png'
import Governance360 from '../assets/governance360.png'
import IotablImage from '../assets/iotabl_1.png'
import No1SEImage from '../assets/no1se.png'
import Weather from '../assets/weather.png'
import CalculatorImage from '../assets/calculator.png'
import MorseCodeImage from '../assets/morse_code.png'

/*
  To add a project, drop its screenshot in src/assets, import it above
  and add an object to this list. Only `title` and `description` are required.

  {
    title: "Project name",
    image: ProjectImage,
    description: "What it is and what you did.",
    technologies: ["React", "CSS"],
    link: { url: "https://...", text: "Visit website" }   // makes the whole card clickable
  }
*/
const projects = [
    {
        title: "Nest Carousel",
        image: NestCarouselImage,
        description: "A full-stack web app for finding your next home or the right housemate. Built end to end: matching between people and homes, live chat, booking viewings and push notifications.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Socket.io"],
        link: { url: "https://www.nestcarousel.com", text: "Visit website" }
    },
    {
        title: "Governance360",
        image: Governance360,
        description: "Involved in the lifecycle of our App, from its ideation, to the development of key features, maintenance, testing, and bug fixing. Technical lead of our commercial website.",
        technologies: ["React", "TypeScript", "Laravel", "Redux Toolkit", "MUI", "Storybook"],
        link: { url: "https://www.governance360.com/", text: "Visit website" }
    },
    {
        title: "Iotabl",
        image: IotablImage,
        description: "Overseen the development of a two-sided IoT data collection platform. Responsible for code architecture, managed technical aspects, sprint planning and development.",
        technologies: ["Vue", "Laravel", "CSS", "Bootstrap", "AWS", "MySQL"],
        link: { url: "https://github.com/manelucas/iotabl", text: "View code" }
    },
    {
        title: "No1 South East",
        image: No1SEImage,
        description: "Development included essential features such as a search functionality, advanced filtering options, geolocation, and an admin panel.",
        technologies: ["React", "SASS", "Firebase", "API"]
    },
    {
        title: "Weather App",
        image: Weather,
        description: "A little practice of using a REST API and display its data. Find the current weather from any part of the world!",
        technologies: ["Vite", "Vue", "Bootstrap", "CSS", "REST API"],
        link: { url: "https://manelucas.github.io/weather-checker/", text: "Visit website" }
    },
    {
        title: "Calculator",
        image: CalculatorImage,
        description: "The famous calculator project that every beginner goes through. This was one of my first projects during my coding bootcamp at Nology.",
        technologies: ["JavaScript", "HTML", "CSS"],
        link: { url: "https://manelucas.github.io/calculator/", text: "Visit website" }
    },
    {
        title: "Morse code translator",
        image: MorseCodeImage,
        description: "Converts text to Morse code and vice versa. Also a Nology project - this has contributed to refining my skills in data manipulation, and data handling.",
        technologies: ["JavaScript", "HTML", "CSS"],
        link: { url: "https://manelucas.github.io/translation_english_to_morse/", text: "Visit website" }
    }
];

export default projects;
