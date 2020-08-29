import React from 'react'
import {Avatar} from '@material-ui/core'


const Video = (props) => {
	return(
		<div className='video'> 
			<img className='thumbnail' src={props.img} alt={props.title} />
			<div className='info'>
				<Avatar className='avatar' alt={props.channel} src={props.channelImg} />
				<div className='text'>
					<h4>{props.title}</h4>
					<p>{props.channel}</p>
					<p>pub: {props.timestamp}</p>
				</div>
			</div>
		</div>
	)
}

export default Video
