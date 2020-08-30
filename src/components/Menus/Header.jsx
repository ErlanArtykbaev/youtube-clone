import React, {useState, useContext} from 'react'
import { NavLink} from 'react-router-dom'
import youtubeAPI from 'youtube-api-search'

import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

import {SearchedContext} from '../../context/SearchedContext'

import axios from '../../apis/youtube'

const Header = (props) => {

	const KEY = 'AIzaSyBP5CI4iNzJI7S0qn6aE_8Cwr3B-7qOmbU'

	const url = 'https://www.googleapis.com/youtube/v3/search'
	const [inputSearch, setInputSearch] = useState('')
	const [searchedVideos, setSearchedVideos] = useContext(SearchedContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		youtubeAPI({key: KEY, term: inputSearch}, videos => {
			setSearchedVideos(videos)
		})
		// axios.get('/search', {
		// 	params:{
		// 		q: inputSearch
		// 	}
		// })
		// .then(res => {
		// 	vid = res.data.items
		// })
		// .catch(err => console.log(err))
		// setSearchedVideos(vid)
	}

	return(
		<div className='header'>
			<div className='left'>
				<MenuRoundedIcon />
				<NavLink to='/'>
					<img 
						className="logo"
						src='https://www.pinclipart.com/picdir/big/35-353209_my-music-on-transparent-background-youtube-logo-clipart.png' 
						alt='icon' />
				</NavLink>
			</div>
			<form onSubmit={handleSubmit} className='middle'>
				<input 
					onChange={(e) => setInputSearch(e.target.value)} 
					value={inputSearch}
					placeholder='Search' 
					type='text' />
				<NavLink to={`/search/${inputSearch}`} onClick={e => e.preventDefault()}>
					<SearchRoundedIcon className='search' />
				</NavLink>				
			</form>
			<div className='right'>
				<VideoCallRoundedIcon className='icon' />
				<AppsRoundedIcon className='icon' />
				<NotificationsRoundedIcon className='icon' />
				<AccountCircleRoundedIcon 
					alt='avatar'/>
			</div>
		</div>
	)
}

export default Header
