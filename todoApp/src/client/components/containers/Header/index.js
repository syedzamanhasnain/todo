import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
	return (
		<section className="navigation">
			<div className="nav-container">
				<div>
					<img
						alt="StudioGraphene"
						src="/images/logo.png"
						srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
					/>
				</div>
				<nav>
					<ul className="nav-list">
						<li>
							<NavLink exact className="link" activeClassName="active" to="/">
								Todo
							</NavLink>
						</li>
						
					</ul>
				</nav>
			</div>
		</section>
	);
}

export default Header;
