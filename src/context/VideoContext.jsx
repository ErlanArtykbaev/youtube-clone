import React, {useState, createContext} from 'react'

export const VideoContext = createContext()

export const VideoProvider = (props) => {
	const [recomendedVideos, setRecomendedVideos] = useState([])
	const [searchedVideos, setSearchedVideos] = useState([])
	const [searchVideo, setSearchVideo] = useState('')

	const searchVideoMeth = (textSearch) => {
		setSearchVideo(textSearch)
	}

	return(
		<VideoContext.Provider>
			{props.children}
		</VideoContext.Provider>
	)
}
