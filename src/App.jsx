import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = () => {
    return (
		<BrowserRouter>
			<div className='app'>
				<Header/>
				<Navbar/>
				<main className='app-main'>
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
				</main>
			</div>
		</BrowserRouter>
    );
};

export default App;
