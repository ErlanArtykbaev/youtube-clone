import React from 'react'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'


const Video = (props) => {
	return(
		<div className='video'> 
			<Link to={`/view/${props.vidId}`}>
				<img className='thumbnail' src={props.img} alt={props.title} />
			</Link>
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
