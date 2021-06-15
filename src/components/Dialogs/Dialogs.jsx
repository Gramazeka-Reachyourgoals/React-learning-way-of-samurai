import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({name, id}) => {
	return (
		<div className={s.dialog+' '+s.active}>
			<NavLink to={`/dialogs/${id}`}>{name}</NavLink>
		</div>
	)
}

const Message = ({text}) => {
	return (
		<div className={s.message}>{text}</div>
	)
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			{/* <h1>Dialogs</h1> */}
			<div className={s.dialogsItems}>
				<DialogItem name='Ihor' id='1'/>
				<DialogItem name='Kolya' id='2'/>
				<DialogItem name='Shora' id='3'/>
				<DialogItem name='Gregory' id='4'/>
				<DialogItem name='LuxuryBurg' id='5'/>
			</div>
			<div className={s.messages}>
				<Message text='Hi!'/>
				<Message text='How are you'/>
				<Message text='MaaaaNNNN!!'/>
				<Message text='Yo'/>
				<Message text='Yo'/>
			</div>
		</div>
	)
}

export default Dialogs;