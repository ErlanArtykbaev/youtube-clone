import React from 'react'

import './css/Sidebar.css'

import SidebarRow from './SidebarRow'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded'
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded'
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded'
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded'
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded'
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'

const Sidebar = () => {
	return(
		<div className='sidebar'>
			<SidebarRow title='Home' selected Icon={HomeRoundedIcon} />
			<SidebarRow title='Trending' Icon={WhatshotRoundedIcon} />
			<SidebarRow title='Subscriptions' Icon={SubscriptionsRoundedIcon} />
			<hr />
			<SidebarRow title='Library' Icon={VideoLibraryRoundedIcon} />
			<SidebarRow title='History' Icon={HistoryRoundedIcon} />
			<SidebarRow title='Your Videos' Icon={OndemandVideoRoundedIcon} />
			<SidebarRow title='Watch Later' Icon={WatchLaterRoundedIcon} />
			<SidebarRow title='Liked Videos' Icon={ThumbUpRoundedIcon} />
			<SidebarRow title='Show more' Icon={ExpandMoreRoundedIcon} />
			<hr />
		</div>
	)
}

export default Sidebar
