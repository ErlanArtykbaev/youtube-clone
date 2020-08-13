import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Recomended from './components/Recomended';
import {Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
			<Router>
				<Switch>

					<Route to='/'>
						<div className='app__page'>
							<Sidebar />
							<Recomended />
						</div>	
					</Route>

					<Route to='/search'>
						<div className='app__page'>
							<Sidebar />
						</div>	
					</Route>

				</Switch>
			</Router>
			<Header />
    </div>
  );
}

export default App;
