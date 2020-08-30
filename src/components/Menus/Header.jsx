import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'


import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

import axios from '../../apis/youtube'

const Header = (props) => {

	const [inputSearch, setInputSearch] = useState('')

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
			<form className='middle'>
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
