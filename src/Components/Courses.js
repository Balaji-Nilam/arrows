import React from "react"
import { Link } from 'react-router-dom';
import './Courses.css'
function Courses(){
    return(
    <section className="courses" id="courses">
	<div className="headers">
		<div className="text">
			<h1>Choose Your Favourite Course</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<Link to="/Btech_Course"><button className="courses-btn btn">View All</button></Link>
	</div>
	<div className="course-contents">
		
		<div className="course-card">
		<Link  to='/Btech_Course'>
			<img alt="" src="https://www.dpi-llp.com/wp-content/uploads/2021/09/btech-video.jpg"/>
		</Link>
			<div className="category">
				<div className="subject"><h3><Link  to='/Btech_Course'>B.Tech</Link></h3></div>
				<img alt="" src="https://www.dpi-llp.com/wp-content/uploads/2021/09/btech-video.jpg"/>
			</div>
			<h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i> 10+ Courses</span>
				<span><i className="fa-solid fa-users"></i> 1000+ Colleges</span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
				{/* <span><Link to="/Btech-Overview"><button className="btn btn-dark">Get Overview</button></Link></span> */}
			</div>
			</div>

		<div className="course-card">
			<img alt="" src="https://th.bing.com/th/id/R.663f89426493b1e67f8e2ca34dc3fbad?rik=iyFeUUAwegACFQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-mSpPluHXywM%2fTyK1MzWKbhI%2fAAAAAAAAAl4%2fwraOl1v_vR4%2fs1600%2fmtech.jpg&ehk=ZbIRD0Va1ESSFStBLL81hC9uyGg32NpAe6GQ2r6mPzE%3d&risl=&pid=ImgRaw&r=0" />
			<div className="category">
				<div className="subject"><h3>M.Tech</h3></div>
				<img alt="" src="https://th.bing.com/th/id/R.663f89426493b1e67f8e2ca34dc3fbad?rik=iyFeUUAwegACFQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-mSpPluHXywM%2fTyK1MzWKbhI%2fAAAAAAAAAl4%2fwraOl1v_vR4%2fs1600%2fmtech.jpg&ehk=ZbIRD0Va1ESSFStBLL81hC9uyGg32NpAe6GQ2r6mPzE%3d&risl=&pid=ImgRaw&r=0"/>
			</div>
			<h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i> 10+ Courses</span>
				<span><i className="fa-solid fa-users"></i> 1000+ Colleges</span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
			</div>
		</div>

		<div className="course-card">
			<img alt="" src="https://c8.alamy.com/comp/T9N787/mba-master-of-business-administration-e-learning-education-and-personal-development-concept-T9N787.jpg"/>
			<div className="category">
				<div className="subject"><h3>MBA</h3></div>
				<img alt="" src="https://c8.alamy.com/comp/T9N787/mba-master-of-business-administration-e-learning-education-and-personal-development-concept-T9N787.jpg"/>
			</div>
			<h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i>5+ Cours</span>
				<span><i className="fa-solid fa-users"></i> 1000+ Colleges</span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
			</div>
		</div>

		<div className="course-card">
			<img alt="" src="https://th.bing.com/th/id/R.98ed06076b35a5a826063997a73c3b75?rik=bN3H3ekcrG0u%2bg&riu=http%3a%2f%2fegspec.org%2fassets%2fimages%2fmca.jpg&ehk=ZKjgl82AtLLw3RJ%2bI8mLWGXzMtCYFGb2XwL9O4tL%2fos%3d&risl=&pid=ImgRaw&r=0"/>
			<div className="category">
				<div className="subject"><h3>MCA</h3></div>
				<img alt="" src="https://th.bing.com/th/id/R.98ed06076b35a5a826063997a73c3b75?rik=bN3H3ekcrG0u%2bg&riu=http%3a%2f%2fegspec.org%2fassets%2fimages%2fmca.jpg&ehk=ZKjgl82AtLLw3RJ%2bI8mLWGXzMtCYFGb2XwL9O4tL%2fos%3d&risl=&pid=ImgRaw&r=0"/>
			</div>
			<h2 className="course-title">Learn JavaScript: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i>3+ Courses</span>
				<span><i className="fa-solid fa-users"></i> 1000+ Colleges</span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
			</div>
		</div>

		<div className="course-card">
			<img alt="" src="https://ih1.redbubble.net/image.234935373.4742/st,small,507x507-pad,600x600,f8f8f8.u8.jpg"/>
			<div className="category">
				<div className="subject"><h3>MS</h3></div>
				<img alt="" src="https://ih1.redbubble.net/image.234935373.4742/st,small,507x507-pad,600x600,f8f8f8.u8.jpg"/>
			</div>
			<h2 className="course-title">Learn JavaScript: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i>10+ Courses</span>
				<span><i className="fa-solid fa-users"></i>1000+ Colleges</span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
			</div>
		</div>

		<div className="course-card">
			<img alt="" src="https://www.theresource.com/wp-content/uploads/2019/09/Skills.jpeg"/>
			<div className="category">
				<div className="subject"><h3>Skill Development</h3></div>
				<img alt="" src="https://www.theresource.com/wp-content/uploads/2019/09/Skills.jpeg"/>
			</div>
			<h2 className="course-title">Learn JQuery: This is some dummy text demonistrating the title</h2>
			<div className="course-desc">
				<span><i className="fa-solid fa-video"></i> 10+ COurses</span>
				<span><i className="fa-solid fa-users"></i> </span>
			</div>
			<div className="course-ratings">
				<span>4.9 <i className="fa-solid fa-star"></i></span>
				<span><b>$</b>0.00</span>
			</div>
		</div>
    </div>

</section>
    )
}

export default Courses;