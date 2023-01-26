

import React from 'react'
import '../styles/start.css'
import trainerImg from '../img/trainer.png'

const Start = () => {
  return ( <section id='classes'>
	<div className="container" >
		<div className="start__wrapper">
			<div className="start__img">
				<img src={trainerImg} alt="" data-aos='fade-left' data-aos-duration='1500'/>
			</div>

			<div className="start__content" data-aos='fade-right' data-aos-duration='1500'>
				<h2 className="section__title">

					Ready to make a <span className="hightlights"> change ?</span> 
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quis, illo in minima a quaerat voluptates cupiditate ipsa nihil natus facere accusantium voluptatum repellendus, dolorem officiis nobis tempora iure. Pariatur.
				</p>
				<button className="register__btn">get Started</button>
			</div>
		</div>
	</div>
  </section>
  )
}

export default Start ;