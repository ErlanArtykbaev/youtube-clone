import React, {useEffect, useContext} from 'react'
import axios from 'axios'

import Video from '../../components/Video'

import {RecomendedContext} from '../../context/RecomendedContext'
// import axios from '../../apis/youtube'

const Recomended = () => {
	const [recomendedVideos, setRecomendedVideos] = useContext(RecomendedContext)

	const KEY = 'AIzaSyBP5CI4iNzJI7S0qn6aE_8Cwr3B-7qOmbU'

	useEffect(() => {
		axios.get('https://www.googleapis.com/youtube/v3/videos', {
			params:{
				chart: 'mostPopular',
				part: 'snippet',
				maxResults: 16,
				key: KEY
			}
		})
		.then(res => {
			setRecomendedVideos(res.data.items)
		})
	},[])

	return(
		<div className='recomended'>
			<h2>Recomended</h2>
			<div className='videos'>
				{
					recomendedVideos.map((vid) => (
						<Video 
							img={vid.snippet.thumbnails.medium.url}
							key={vid.id}
							channel={vid.snippet.channelTitle}
							timestamp={vid.snippet.publishedAt}
							title={vid.snippet.title} />
					))
				}
			</div>
		</div>
	)
}

export default Recomended
