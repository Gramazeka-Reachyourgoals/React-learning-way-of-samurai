import React from 'react';
// 's' it's object with all unique names of our classes
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={`${s.item} ${s.active}`}><a>Profile</a></div>
			<div className={s.item}><a>Messages</a></div>
			<div className={s.item}><a>News</a></div>
			<div className={s.item}><a>Music</a></div>
		</nav>
	)
}

export default Navbar;