import React, { useState } from 'react'

export default function Index() {


    return (
        <section class="ftco-section bg-light" id="skills-section">
		<div class="container">
			<div class="row justify-content-center pb-5">
				<div class="col-md-12 heading-section text-center">
					<span class="subheading">Skills</span>
					<h2 class="mb-4">My Skills</h2>
				</div>
			</div>
			<div class="row progress-circle mb-5">

				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/html.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">HTML</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/css.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">CSS</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/javascript.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4 js">JavaScript</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/php.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">PHP</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/laravel.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">Laravel</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/react.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4 react">React JS</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/nodejs.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4 nodejs">Node/Express</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/mongo.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4 mongo">Mongo DB</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/mysql.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4 msql">MySQL DB</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/java.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">Java</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/python.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">Python</h2>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="zoom-in-up">
					<div class="bg-white rounded-lg shadow p-4 skill-card">
						<img src={`${process.env.PUBLIC_URL}/Assets/images/Skills/github.png`} alt="" style={{width:'100%'}}/>
						<h2 class="h5 font-weight-bold text-center mb-4">GitHub</h2>
					</div>
				</div>
				
			</div>
		</div>
	</section>
    )
}
