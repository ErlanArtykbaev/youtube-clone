import React from 'react'

const SidebarRow = ({Icon, title, selected}) => {
	return(
		<div className={`sidebarRow ${selected && 'selected'}`}>
			<Icon className='icon' />
			<h2 className='title'>{title}</h2>
		</div>
	)
}

export default SidebarRow
