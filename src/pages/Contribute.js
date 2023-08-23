import React from 'react';
import LayoutInner from '../components/layoutPages';

import './Contribute.css';

const Contribute = () => {
	return (
		<LayoutInner>
			<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
				<div className="container text-center py-5">
					<h1 className="display-2 text-dark mb-4 animated slideInDown">Contribute</h1>
					<nav aria-label="breadcrumb animated slideInDown">
						<ol className="breadcrumb justify-content-center mb-0">
							<li className="breadcrumb-item"><a href="/">Home</a></li>
							<li className="breadcrumb-item text-dark" aria-current="page">Contribute</li>
						</ol>
					</nav>
				</div>
			</div>
	
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
							<div className="section-title">
								<h1 className="display-6">Contact Us</h1>
							</div>
							<div className="containerContactForm">
								<form name="contribute" data-netlify-recaptcha="true" data-netlify="true">
									<label htmlFor="fname">First Name</label>
									<input type="text" id="fname" name="firstname" placeholder="Your name.." />

									<label htmlFor="lname">Last Name</label>
									<input type="text" id="lname" name="lastname" placeholder="Your last name.." />

									<label htmlFor="country">Country</label>
									<select id="country" name="country">
									<option value="australia">Australia</option>
									<option value="canada">Canada</option>
									<option value="usa">USA</option>
									</select>

									<label htmlFor="subject">Subject</label>
									<textarea id="subject" name="subject" placeholder="Write something.." style={{height:200+'px'}}></textarea>

									<input type="submit" value="Submit" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
	
	
		</LayoutInner>
	  );
};

export default Contribute;
