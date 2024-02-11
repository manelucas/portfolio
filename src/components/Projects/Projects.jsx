import React from 'react'
import Card from './Card/Card'

const Projects = () => {
    return (
        <>
            <section id="projects">
              <div className="py-4 border-bottom">
                  <h2 className="mt-100">
                      Projects
                  </h2>
              </div>
              <div className="content-section">
                  
                  <div className="row p-5 project-card faded-animation hidden mb-5 align-items-center">
                      <div className="col-xl-5 col-lg-12">
                          <div className="image-container">
                              <img className="br-1 w-100 h-100 object-cover" loading="lazy" src="./assets/board_meetings_image.png" alt="Image from Governance360 app"/>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                          <h3>Governance360</h3>
                          <p className="p-0">
                              Subscription based web app* that provides management tools dedicated to Board directors and SMEs.
                          </p>
                          <div>
                              <span className="text-bold">
                                  Technologies:
                              </span>
                              <span>
                                  React & Typescript, Laravel, Redux, MUI, Storybook.
                              </span>
                          </div> 
                          <div className="mt-2 py-2 g-2 d-flex g-1 align-items-center">
                              <span>
                                  <a href="https://www.governance360.com/" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Website
                                  </a>
                              </span>
                          </div>
                          <div className="pt-2">
                              <i>
                                  * Web App & repo are private. 
                              </i>
                          </div>
                      </div>
                  </div>
                

                  <Card/>


                  <div className="row p-5 project-card faded-animation hidden my-5">
                      <div className="col-xl-5 col-lg-12">
                          <div className="image-container">
                              <img className="br-1 w-100 h-auto" loading="lazy" src="./assets/no1se.png" alt=""/>
                          </div>
                      </div>
                      
                      <div className="col-xl-7 col-lg-12">
                          <h3>No1 South East</h3>
                          <p className="p-0">
                              Web app* that provided food offers & discounts from small venues in the South East of London.
                          </p>
                          <div>
                              <span className="text-bold">
                                  Technologies:
                              </span>
                              <span>
                                  React, SASS, Firebase, API
                              </span>
                          </div> 
                          <div className="pt-2">
                              <i>
                                  * Repo is private. 
                              </i>
                          </div>
                      </div>
                  </div>

                  <div className="row p-5 project-card faded-animation hidden my-5 align-items-center">
                      <div className="col-xl-5 col-lg-12">

                          <div className="image-container">
                              <img className="br-1 w-100 h-auto" loading="lazy" src="./assets/punk_api.png" alt="Image from Iotabl dashboard"/>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                          <h3>Beers API</h3>
                          <p className="p-0">
                              One of my first personal projects to practice the Rest API and search term. 
                          </p>
                          <div>
                              <span className="text-bold">
                                  Technologies:
                              </span>
                              <span>
                                  React & CSS, Rest API.
                              </span>
                          </div> 
                          <div className="mt-2 py-2 g-2 d-flex g-1 align-items-center">
                              <span>
                                  <a href="https://github.com/manelucas/beersAPI" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Code
                                  </a>
                                  <a href="https://beer-api-713a5.web.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Page
                                  </a>
                              </span>
                          </div>
                      </div>
                  </div>
                
                  <div className="row p-5 project-card faded-animation hidden my-5 align-items-center">
                      <div className="col-xl-5 col-lg-12">

                          <div className="image-container">
                              <img className="br-1 w-100 h-auto" loading="lazy" src="./assets/calculator.png" alt="Image from Iotabl dashboard"/>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                          <h3>Calculator</h3>
                          <p className="p-0">
                              The famous calculator project that every beginner goes through. Equally, this was one of my first projects that I completed during my coding bootcamp at Nology. While this isn't the most useful kind of page, it really helped me improve my technical skills. 
                          </p>
                          <div>
                              <span className="text-bold">
                                  Technologies:
                              </span>
                              <span>
                                  Vanilla JS, HTML, CSS.
                              </span>
                          </div> 
                          <div className="mt-2 py-2 g-2 d-flex g-1 align-items-center">
                              <span>
                                  <a href="https://github.com/manelucas/calculator" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Code
                                  </a>
                                  <a href="https://manelucas.github.io/calculator/" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Page
                                  </a>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}

export default Projects