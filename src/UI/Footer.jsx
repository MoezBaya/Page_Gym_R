import React from 'react'
import '../styles/footer.css'
import logo from '../img/dumble.png'

const Footer = () => {

	const year = new Date().getFullYear()
  return <footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
	<div className="container">
		<div className="footer_wrapper">
			<div className="footer__box">
				<div className="logo">
					<div className="logo__img"><img src={logo} alt="" /></div>
					<h2>Fitbody</h2>
				</div>
				
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis voluptatibus, architecto incidunt dolore est.

				</p>
			</div>

			<div className="footer__box">
				<h4 className="footer__title">Company</h4>

				<ul className="footer__links">
					<li><a href="#home">Our program</a></li>
					<li><a href="#home">Our plan</a></li>
					<li><a href="#home">Become a member</a></li>
				</ul>
			</div>

			<div className="footer__box">
				<h4 className="footer__title">Quick links</h4>

				<ul className="footer__links">
					<li><a href="#home">About us</a></li>
					<li><a href="#home">Contact us</a></li>
					<li><a href="#home">Support</a></li>
				</ul>
			</div>

			<div className="footer__box">
				<h4 className="footer__title">Quick links</h4>

				<ul className="footer__links">
					<li><a href="#home">About us</a></li>
					<li><a href="#home">Contact us</a></li>
					<li><a href="#home">Support</a></li>
				</ul>
			</div>
		</div>

		<p className='copyright'>copyright - {year} developped by BenBaya. All right reserved.</p>
	</div>
  </footer>
}

export default Footer ;