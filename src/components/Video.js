import React from 'react'
import {Avatar} from '@material-ui/core'

import './css/Video.css'

const Video = (props) => {
	return(
		<div className='video'> 
			<img className='video__thumbnail' src={props.img} alt={props.title} />
			<div className='video__info'>
				<Avatar className='video__avatar' alt={props.channel} src={props.channelImg} />
				<div className='video__text'>
					<h4>{props.title}</h4>
					<p>{props.channel}</p>
					<p>pub: {props.timestamp}</p>
				</div>
			</div>
		</div>
	)
}

export default Video
