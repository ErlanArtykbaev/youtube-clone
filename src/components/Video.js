import React from 'react'
import {Avatar} from '@material-ui/core'

import './css/Video.css'

const Video = (props) => {
	return(
		<div className='video'> 
			<img className='video__thumbnail' src={props.img} />
			<div className='video__info'>
				<Avatar className='video__avatar' alt={props.channel} src={props.channelImg} />
				<div className='video_text'>
					<h4>{props.title}</h4>
					<p>{props.channel}</p>
					<p>{props.views} . {props.timestamp}</p>
				</div>
			</div>
		</div>
	)
}

export default Video
