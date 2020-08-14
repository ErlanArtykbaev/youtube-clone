import React, {useState} from 'react'

import './css/Header.css'

import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { NavLink} from 'react-router-dom'

const Header = (props) => {

	const [inputSearch, setInputSearch] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleFormSearch(inputSearch)
	}

	return(
		<div className='header'>
			<div className='header__left'>
				<MenuRoundedIcon />
				<NavLink to='/'>
					<img 
						className="header__logo"
						src='https://www.pinclipart.com/picdir/big/35-353209_my-music-on-transparent-background-youtube-logo-clipart.png' 
						alt='icon' />
				</NavLink>
			</div>
			<form onSubmit={handleSubmit} className='header__middle'>
				<input 
					onChange={(e) => setInputSearch(e.target.value)} 
					value={inputSearch}
					placeholder='Search' 
					type='text' />
				<NavLink to={`/search/${inputSearch}`}>
					<SearchRoundedIcon className='header__search' />
				</NavLink>				
			</form>
			<div className='header__right'>
				<VideoCallRoundedIcon className='header__icon' />
				<AppsRoundedIcon className='header__icon' />
				<NotificationsRoundedIcon className='header__icon' />
				<AccountCircleRoundedIcon 
					alt='avatar'/>
			</div>
		</div>
	)
}

export default Header
