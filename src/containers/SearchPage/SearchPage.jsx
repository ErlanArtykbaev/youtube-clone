import React from 'react'

import './SearchPage.css'

import TuneRoundedIcon from '@material-ui/icons/TuneRounded'

const SearchPage = (props) => {
	return(
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<TuneRoundedIcon />
				<h2>Filter</h2>
			</div>
			<div className='searchPage__videos'>{props.videos}</div>
		</div>
	)
}

export default SearchPage
