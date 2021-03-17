import React, {useState, createContext} from 'react'

export const RecomendedContext = createContext()

export const RecomendedProvider = (props) => {
	const [recomendedVideos, setRecomendedVideos] = useState([])
	
	return(
		<RecomendedContext.Provider value={[
			recomendedVideos, 
			setRecomendedVideos
		]}>
			
			{props.children}
		</RecomendedContext.Provider>
	)
}
