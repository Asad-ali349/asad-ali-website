import React, { useState } from 'react'

export default function Index() {


const [isHidden, setHidden] = useState(true);

    return (
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container-fluid px-md-4">
                <div class="row justify-content-center pb-5">
                    <div class="col-md-12 heading-section text-center">
                        <span class="subheading">Accomplishments</span>
                        <h2 class="mb-4">Our Projects</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/p1.png)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Rubicue</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/m1.png)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/p5.webp)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Dream Job</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/m3.jpg)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Officana Tasker</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/p6.png)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Leasing & Loan System</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/p7.jpg)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Travellers</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/m2.png)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Share Me</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="zoom-out">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/g1.png)` }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                
                                <span>Logos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
