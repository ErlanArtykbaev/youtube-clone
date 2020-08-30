import React from 'react'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Menus/Header'
import Sidebar from './components/Menus/Sidebar'
import Recomended from './components/ContentPages/Recomended'
import SearchPage from './components/ContentPages/SearchPage'

import { RecomendedProvider} from './context/RecomendedContext'
import { SearchedProvider } from './context/SearchedContext'

const App = () => {

  return (
		<div className="App">
			<Router>
				<Header />
				<div className='app__page'>
					<Sidebar />
					<Switch>
						<Route path='/' exact>
							<RecomendedProvider>
								<Recomended />
							</RecomendedProvider>
						</Route>
						<Route path='/search/:searchTerm'>
							<SearchedProvider>
								<SearchPage />
							</SearchedProvider>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
  )
}

export default App
