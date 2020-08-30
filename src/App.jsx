import React from 'react'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Menus/Header'
import Sidebar from './components/Menus/Sidebar'
import Recomended from './components/ContentPages/Recomended'
import SearchPage from './components/ContentPages/SearchPage'

import { VideoProvider} from './context/VideoContext'

const App = () => {

  return (
		<VideoProvider>
			<div className="App">
				<Router>
					<Header />
					<div className='app__page'>
						<Sidebar />
						<Switch>
							<Route path='/' exact>
								<Recomended />
							</Route>

							<Route path='/search/:searchTerm'>
								<SearchPage />
							</Route>

						</Switch>
					</div>
				</Router>
			</div>
		</VideoProvider>
  )
}

export default App
