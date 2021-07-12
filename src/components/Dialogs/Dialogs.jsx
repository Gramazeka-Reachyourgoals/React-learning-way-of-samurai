import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({dialogsPage, addMessage, updateNewMessageText}) => {
	let dialogsElements = dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
	let messagesElements = dialogsPage.messages.map(el => <Message text={el.message}/>);

	const inputMessageText = React.createRef();

	const addMessageLocal = () => {
		addMessage()
	}

	const onMessageChange = () => {
		let text = inputMessageText.current.value;
		updateNewMessageText(text);
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
				<textarea ref={inputMessageText} value={dialogsPage.newMessageText} onChange={onMessageChange}/>
				<button onClick={addMessageLocal}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs;