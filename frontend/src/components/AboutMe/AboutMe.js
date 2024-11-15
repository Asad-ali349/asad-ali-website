import React from 'react';


export default function AboutMe() {
  return (
    <section class="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
		<div class="container">
			<div class="row d-flex no-gutters">
				<div class="col-md-6 col-lg-5 d-flex" data-aos="zoom-in-up">
					<div class="img-about img d-flex align-items-stretch">
						<div class="overlay"></div>
						<div class="img d-flex align-self-stretch align-items-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Assets/images/about-1.png)`}}>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5" data-aos="zoom-in-up">
					<div class="py-md-5"> 
						<div class="row justify-content-start pb-3">
							<div class="col-md-12 heading-section">
								<span class="subheading">My Intro</span>
								<h2 class="mb-4" style={{fontSize: '34px',textTransform: 'capitalize'}}>About Me</h2>
								<p> I am a Full-stack developer and mostly I am passionate about web coding. I’m quite an expert in using coding and markup languages like Hypertext markup language (HTML), Cascading Style Sheet, Java, Php, and JavaScript. I have completed my graduation in Computer Science and also done many courses related to web designing, coding, and programming. My three years of experience helped me to understand business tricks. Now I can easily cope with the business market and understand the consumer's needs.</p>

								<ul class="about-info mt-4 px-md-0 px-2">
									<li class="d-flex"><span>Name:</span> <span>Asad Ali</span></li>
									<li class="d-flex"><span>Date of birth:</span> <span>August 18, 1999</span></li>
									<li class="d-flex"><span>Address:</span> <span>Satelite town, Gujranwala, Pakistan</span></li>
									<li class="d-flex"><span>Zip code:</span> <span>52250</span></li>
									<li class="d-flex"><span>Email:</span> <span>asadali29529@gmail.com</span></li>
									<li class="d-flex"><span>Phone: </span> <span>+92-316-7429529</span></li>
								</ul>
							</div>
							<div class="col-md-12">
								<div class="my-interest d-lg-flex w-100">
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-listening"></span>
										</div>
										<div class="text">Music</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-suitcases"></span>
										</div>
										<div class="text">Travel</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-video-player"></span>
										</div>
										<div class="text">Movie</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-football"></span>
										</div>
										<div class="text">Sports</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
