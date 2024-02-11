import React from 'react'

const Card = (props) => {

    const {img } = props
    return(
        <div className="row p-5 project-card faded-animation hidden my-5 align-items-center ">
                      <div className="col-xl-5 col-lg-12">
                          <div className="image-container">
                              <img className="br-1 w-100 h-auto" loading="lazy" src="./assets/Iotabl_1.png" alt="Image from Iotabl dashboard"/>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                          <h3>Iotabl</h3>
                          <p className="p-0">
                              Technical lead at Iotabl - a two-sided data collection platform for the Internet of Things.
                          </p>
                          <div>
                              <span className="text-bold">
                                  Technologies:
                              </span>
                              <span>
                                  Vue & Laravel, CSS, Bootstrap, AWS, MySQL.
                              </span>
                          </div> 
                          <div className="mt-2 py-2 g-2 d-flex g-1 align-items-center">
                              <span>
                                  <a href="https://github.com/manelucas/iotabl" target="_blank" rel="noreferrer" className="btn btn-primary">
                                      Code
                                  </a>
                              </span>
                          </div>
                      </div>
                  </div>
    )
}

export default Card