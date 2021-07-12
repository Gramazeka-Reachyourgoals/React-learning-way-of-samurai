import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = ({state, addPost, updateNewPostText, addMessage, updateNewMessageText}) => {
	return (
		<div className='app'>
			<Header/>
			<Navbar state={state.sidebar}/>
			<main className='app-main'>
				<Route path='/profile' render={() => <Profile 
					profilePage={state.profilePage} 
					addPost={addPost} 
					updateNewPostText={updateNewPostText}/>}/>
				<Route path='/dialogs' render={() => <Dialogs 
					dialogsPage={state.dialogsPage}
					addMessage={addMessage}
					updateNewMessageText={updateNewMessageText}/>}/>
				<Route path='/news' render={() => <News/>}/>
				<Route path='/music' render={() => <Music/>}/>
			</main>
		</div>
    );
};

export default App;
