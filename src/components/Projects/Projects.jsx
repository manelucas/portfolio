import React, { useEffect } from 'react'
import Card from './Card/Card'
import projects from '../../data/projects'

const Projects = () => {

    // Fade each card in as it scrolls into view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.card-wrapper').forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects">
            <div className="section-heading">
                <h2>Projects & Work</h2>
            </div>
            <div className="content-section">
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={project.title} className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper faded-animation h-100" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                                <Card {...project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
