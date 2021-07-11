import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({state}) => {	
	let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
	let messagesElements = state.messages.map(el => <Message text={el.message}/>);

	const inputMessageText = React.createRef();

	const addMessage = () => {
		let messageText = inputMessageText.current.value;
		alert(messageText)
	}

	return (
		<div className={s.dialogs}>
			{/* <h1>Dialogs</h1> */}
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div className={s.writeMessage}>
				<textarea ref={inputMessageText}></textarea>
				<button onClick={addMessage}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs;