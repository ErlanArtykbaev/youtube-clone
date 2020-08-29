import React from 'react'

import TuneRoundedIcon from '@material-ui/icons/TuneRounded'

const SearchPage = (props) => {
	return(
		<div className='searchPage'>
			<div className='filter'>
				<TuneRoundedIcon />
				<h2>Filter</h2>
			</div>
			<div className='videos'>{props.videos}</div>
		</div>
	)
}

export default SearchPage
