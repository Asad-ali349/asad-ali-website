import React, { useState } from 'react'
import emailjs from 'emailjs-com';
export default function Index() {
	const [contactForm, setContactForm]=useState({
		name:'',
		email:'',
		subject:'',
		message:''
	})
	const handleChange = (e) => {
		setContactForm({ ...contactForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(contactForm);
		// try {
		// 	await emailjs.send(
		// 	'YOUR_SERVICE_ID',
		// 	'YOUR_TEMPLATE_ID',
		// 	contactForm,
		// 	'YOUR_USER_ID'
		// 	);

		// 	console.log('Email sent successfully');
		// 	// Display success message to the user
		// } catch (error) {
		// 	console.error('Error sending email:', error);
		// 	// Display error message to the user
		// }
	};
    return (
        <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-3">
				<div class="col-md-7 heading-section text-center">
					<span class="subheading">Contact us</span>
					<h2 class="mb-4">Have a Project?</h2>
				</div>
			</div>

			<div class="row block-9">
				<div class="col-md-8">
					<form action="#" class="bg-light p-4 p-md-5 contact-form" onSubmit={handleSubmit}> 
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Your Name" name='name' onChange={handleChange} value={contactForm.name}/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Your Email" name='email' onChange={handleChange} value={contactForm.email}/>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Subject" name='subject' onChange={handleChange} value={contactForm.subject}/>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<textarea name="message" id="" cols="30" rows="7" class="form-control" placeholder="Message" onChange={handleChange}>{contactForm.message}</textarea>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
								</div>
							</div>
						</div>
					</form>
					
				</div>

				<div class="col-md-4 d-flex pl-md-5 mb-4">
					<div class="row">
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-map-marker"></span>
							</div>
							<div class="text">
								<p><span>Address:</span> Satelite Town, Gujranwala, Pakistan</p>
							</div>
						</div>
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-phone"></span>
							</div>
							<div class="text">
								<p><span>Phone:</span> <a href="tel://+923167429529">+ 92 316 7429529</a></p>
							</div>
						</div>
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-paper-plane"></span>
							</div>
							<div class="text">
								<p><span>Email:</span> <a href="mailto:asadking066@gmail.com">asadking066@gmail.com</a></p>
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
	</section>
    )
}
