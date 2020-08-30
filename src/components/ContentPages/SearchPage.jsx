import React, {useContext, useEffect} from 'react'

import TuneRoundedIcon from '@material-ui/icons/TuneRounded'

import {SearchedContext} from '../../context/SearchedContext'
import Video from '../Video'

import axios from '../../apis/youtube'

const SearchPage = ({match}) => {
	const [searchedVideos, setSearchedVideos] = useContext(SearchedContext)

	return(
		<div className='searchPage'>
			<div className='filter'>
				<TuneRoundedIcon />
				<h2>Filter</h2>
			</div>
			<div className='videos'>
				{
					searchedVideos.map((vid) => (
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

export default SearchPage
