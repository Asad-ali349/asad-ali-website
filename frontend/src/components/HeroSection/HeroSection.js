import React from 'react';


export default function HeroSection() {
  return (
    <>
    
    <section id="home-section" class="hero" >
		<div class="home-slider owl-carousel" data-aos="zoom-in">
			<div class="slider-item">
				<div class="overlay"></div>
				<div class="container-fluid px-md-0">
					<div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
						<div class="one-third order-md-last img" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/bg_1.jpg)` }}>
							<div class="overlay"></div>
							<div class="overlay-1"></div>
						</div>
						<div class="one-forth " >
							<div class="hero_text text">
								<span class="subheading">We Design &amp; Build Brands</span>
								<h1 class="mb-4 mt-3">Hi, I am <span>Asad</span>. This is my favorite work.</h1>
								<p><a href="#contact-section" class="btn btn-primary">Hire me</a> <a target='_blank' href={`${process.env.PUBLIC_URL}/Assets/pdf/Asad_resume.pdf`} class="btn btn-primary btn-outline-primary">Download CV</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        
	</section>
    <section class="ftco-counter img bg-light" id="section-counter">
        <div class="container">
            <div class="row">
                <div class="col-md-3 justify-content-center counter-wrap " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div class="block-18 d-flex">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-suitcase"></span>
                        </div>
                        <div class="text">
                            <strong class="number" data-number="130">30+</strong>
                            <span>Project Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 justify-content-center counter-wrap " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div class="block-18 d-flex">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-loyalty"></span>
                        </div>
                        <div class="text">
                            <strong class="number" data-number="200">30+</strong>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 justify-content-center counter-wrap " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div class="block-18 d-flex">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-coffee"></span>
                        </div>
                        <div class="text">
                            <strong class="number" data-number="478">10</strong>
                            <span>Cups of coffee</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 justify-content-center counter-wrap " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div class="block-18 d-flex">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-calendar"></span>
                        </div>
                        <div class="text">
                            <strong class="number" data-number="5">4</strong>
                            <span>Years experienced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
