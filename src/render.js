import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';

export let rerenderEntireTree = (state) => { 
	ReactDOM.render(
	  <React.StrictMode>
			<BrowserRouter>
				<App 
					state={state} 
					addPost={addPost} 
					updateNewPostText={updateNewPostText}
					addMessage={addMessage}
					updateNewMessageText={updateNewMessageText}/>
			</BrowserRouter>
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}
