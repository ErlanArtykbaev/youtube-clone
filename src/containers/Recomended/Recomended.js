import React, {useState, useEffect} from 'react'

import './Recomended.css'
import Video from '../../components/Video'
import axios from 'axios'

const Recomended = () => {
	const [recomendedVides, setRecomendedVideos] = useState([])

	const KEY = 'AIzaSyBP5CI4iNzJI7S0qn6aE_8Cwr3B-7qOmbU'

	const getResponse = () => {
		axios.get('https://www.googleapis.com/youtube/v3/videos', {
			params:{
				chart: 'mostPopular',
				part: 'snippet',
				maxResults: 16,
				key: KEY
			}
		})
		.then(res => {
			console.log(res.data.items)
			setRecomendedVideos(res.data.items)
		})
	}

	useEffect(() => {
		getResponse()
}, [])

	return(
		<div className='recomended'>
			<h2>Recomended</h2>
			<div className='recomended__videos'>
				{
					recomendedVides.map((vid) => (
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
