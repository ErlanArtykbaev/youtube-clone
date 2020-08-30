import React, {useContext, useEffect} from 'react'

import TuneRoundedIcon from '@material-ui/icons/TuneRounded'

import {VideoContext} from '../../context/VideoContext'
import Video from '../Video'

const SearchPage = () => {
	const [searchedVideos, setSearchedVideos] = useContext(VideoContext)

	return(
		<div className='searchPage'>
			<div className='filter'>
				<TuneRoundedIcon />
				<h2>Filter</h2>
			</div>
			<div className='videos'>
				{
					searchedVideos.map((item) => {
						return <Video 
							img={item.img}
						/>
					})
				}
			</div>
		</div>
	)
}

export default SearchPage
