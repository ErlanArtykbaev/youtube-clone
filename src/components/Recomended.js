import React from 'react'

import './css/Recomended.css'
import Video from './Video'

const Recomended = () => {
	return(
		<div className='recomended'>
			<h2>Recomended</h2>
			<div className='recomended__videos'>
				<Video 
					/>
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</div>
	)
}

export default Recomended
