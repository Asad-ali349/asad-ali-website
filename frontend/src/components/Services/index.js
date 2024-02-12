import React, { useState } from 'react'

export default function Index() {

    return (
    <>
    <section class="ftco-section" id="services-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 heading-section text-center mb-5" >
					<span class="subheading">I am great at</span>
					<h2 class="mb-4">We do awesome services for our clients</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="media block-6 services d-block bg-white rounded-lg shadow">
						<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-web-programming"></span></div>
						<div class="media-body">
							<h3 class="heading mb-3">Web Development</h3>
							<p>Provide your customers and clients freedom to connect with you on any device they prefer.</p>
						</div>
					</div> 
				</div>
				<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="media block-6 services d-block bg-white rounded-lg shadow">
						<div class="icon shadow d-flex align-items-center justify-content-center"><span class="flaticon-app-development"></span></div>
						<div class="media-body">
							<h3 class="heading mb-3">Mobile Application</h3>
							<p>iOS and Android mobile application design based on best practices and upcoming trends</p>
						</div>
					</div> 
				</div>
				<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="media block-6 services d-block bg-white rounded-lg shadow">
						<div class="icon shadow d-flex align-items-center justify-content-center"><span class="flaticon-3d-design"></span></div>
						<div class="media-body">
							<h3 class="heading mb-3">Graphic Designing</h3>
							<p>Logo Design, Business Cards, Letterheads, Brochures, Menu Cards, Flyers and more.</p>
						</div>
					</div> 
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-hireme">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-8 col-lg-8 d-flex align-items-center">
					<div class="w-100 py-4">
						<h2>Have a project on your mind.</h2>
						<p>Let’s get to work! 💼✨ Find out how it works and ask any questions you may have!</p>
						<p class="mb-0"><a href="#" class="btn btn-white py-3 px-4">Contact me</a></p>
					</div>
				</div>
				<div class="col-md-4 col-lg-4 d-flex align-items-end">
					<img src={`${process.env.PUBLIC_URL}/Assets/images/author.png`}  class="img-fluid" alt=""/>
				</div>
			</div>
		</div>
	</section>
    </>
    )
}
