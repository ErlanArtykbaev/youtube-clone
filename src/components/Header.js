import React from 'react'

import './css/Header.css'

import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

const Header = () => {
	return(
		<div className='header'>
			<div className='header__left'>
				<MenuRoundedIcon />
				<img 
					className="header__logo"
					src='https://www.pinclipart.com/picdir/big/35-353209_my-music-on-transparent-background-youtube-logo-clipart.png' 
					alt='icon' />
			</div>
			<div className='header__middle'>
				<input placeholder='Search' type='text' />
				<SearchRoundedIcon className='header__search' />
			</div>
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
