import '../styles/header.css';
import React, {useEffect, useRef} from 'react' ;
import logo from'../img/dumble.png' ;

const nav__links = [
	{
		id: 1,
		path:'#',
		display: 'Home'
	},
	{
		id: 2,
		path:'#schedule',
		display: 'Schudel'
	},
	{
		id: 3,
		path:'#classes',
		display: 'Classes'
	},
	{
		id: 4,
		path:'#pricing-plan',
		display: 'Pricing'
	}
];
const Header =() => {
	const headerRef = useRef(null)
	const headerFunc = () =>{
		if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
			headerRef.current.classList.add('sticky__header')
		}else{
			headerRef.current.classList.remove('sticky__header')
		}
	}

	useEffect(()=>{

		window.addEventListener('scroll',headerFunc)
		return ()=> window.removeEventListener('scroll', headerFunc);
	},[])

	const handleClick =e =>{
		e.preventDefault();

		const targetAtt = e.target.getAttribute('href');
		const location = document.querySelector(targetAtt).offsetTop;
		window.scrollTo({
			left: 0,
			top: location -80,
		});
	};
  return (
	<header className="header" ref={headerRef}> 
		<div className="container">
			<div className="nav-wrapper">
				{/* =============== LOGO ================= */}
				<div className="logo">
					<div className="logo__img"><img src={logo} alt="" /></div>
					<h2>Fitbody</h2>
				</div>

				{/*================= navigation menu ============ */}

				<div className="navigation">
					<ul className="menu">
						{
							nav__links.map((item) =>(
								<li className="nav__item" key={item.id}>
									<a onClick={handleClick} href={item.path}>{item.display}</a>
								</li>
							))
						}
					</ul>
				</div>

				{/* ====================== nav right ================== */}
				<div className="nav__right">
					<button className='register__btn'>Register</button>
					<span className="mobile__menu">
						<i className="ri-menu-line"></i>
					</span>
				</div>
			</div>
		</div>
	</header>
  )
}
export default Header ;