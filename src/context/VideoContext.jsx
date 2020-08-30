import React, {useState, createContext} from 'react'

export const VideoContext = createContext()

export const VideoProvider = (props) => {
	const [recomendedVideos, setRecomendedVideos] = useState([])
	const [searchedVideos, setSearchedVideos] = useState([])
	const [inputSearch, setInputSearch] = useState('')
	
	return(
		<VideoContext.Provider value={[
			recomendedVideos, 
			setRecomendedVideos, 
			inputSearch, 
			setInputSearch, 
			searchedVideos, 
			setSearchedVideos]}>
			
			{props.children}
		</VideoContext.Provider>
	)
}
