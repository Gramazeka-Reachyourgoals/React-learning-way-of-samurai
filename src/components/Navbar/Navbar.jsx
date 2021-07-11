import React from 'react';
// 's' it's object with all unique names of our classes
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({state}) => {
	let friendsListElements = state.friendsList.map(el => (
		<li className={`${s.friend} friend${el.id}`}>
			<div className={s.circle}></div>
			<p>{el.name}</p>
		</li>
	))

	return (
		<nav className={s.nav}>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<p className={s.title}>Friends</p>
				<ul className={s.friendsList}>
					{friendsListElements}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;