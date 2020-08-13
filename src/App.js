import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Recomended from './components/Recomended';

function App() {
  return (
    <div className="App">
			<Header />
			<div className='app__page'>
				<Sidebar />
				<Recomended />
			</div>
    </div>
  );
}

export default App;
