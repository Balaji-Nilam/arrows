import React from "react";
import { useEffect } from "react"; 
function Footer() {
	useEffect(() => {
		window.scrollTo(0, 0);
	})
  return (
  <div>
<section className="footer" id="footer">
	<div className="footer-contents">
		
		<div className="footer-col footer-col-1">
			<div className="col-title">
				<img alt="" src="images/logo.png"/>
			</div>
			<div className="col-contents">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
			</div>
		</div>

		<div className="footer-col footer-col-2">
			<div className="col-title">
				<h3>Contact</h3>
			</div>
			<div className="col-contents">
				<div className="contact-row">
					<span>Address</span>
					<span>MIC College, Kanchikacherla, AP</span>
				</div>
				<div className="contact-row">
					<span>Phone</span>
					<span>+91 9999999999</span>
				</div>
				<div className="contact-row">
					<span>Website</span>
					<span>MIC-College-Tutorials.com</span>
				</div>
				<div className="contact-row">
					<span>Email</span>
					<span>MICCollegeTutorials.com</span>
				</div>
			</div>
		</div>

		<div className="footer-col footer-col-3">
			<div className="col-title">
				<h3>Quick Links</h3>
			</div>
			<div className="col-contents">
				<a href="#" >Home</a>
				<a href="#">Services</a>
				<a href="#">Courses</a>
				<a href="#">Categories</a>
				<a href="#">Testimonials</a>
			</div>
		</div>

		<div className="footer-col footer-col-4">
			<div className="col-title">
				<h3>For Other Queries</h3>
			</div>
			<div className="col-contents">
				<form className="newsletter">
					<input type="email" placeholder="Your Email"/>
					<button className="newsletter-btn btn" type="submit">Subscribe</button>
				</form>
			</div>
		</div>
	</div>
	<div className="copy-rights">
		<p>Created By <b>MIC College Tutorials</b> All Rights Reserved</p>
	</div>
</section>
</div>
);
}
export default Footer;