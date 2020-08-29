import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recomended from './containers/Recomended/Recomended'
import SearchPage from './containers/SearchPage/SearchPage'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

import { VideoProvider} from './context/VideoContext'

const App = () => {

  return (
		<VideoProvider>
			<div className="App">
				<BrowserRouter>
					<Header />
					<Switch>

						<Route path='/' exact>
							<div className='app__page'>
								<Sidebar />
								<Recomended />
							</div>	
						</Route>

						<Route path='/search/:searchTerm'>
							<div className='app__page'>
								<Sidebar />
								<SearchPage />
							</div>	
						</Route>

					</Switch>
				</BrowserRouter>
			</div>
		</VideoProvider>
  )
}

export default App
