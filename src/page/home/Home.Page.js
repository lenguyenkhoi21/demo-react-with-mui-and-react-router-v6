import React from 'react'
import './Home.Page.css'
import Layouts from '../../component/layout/page/Layouts'

const HomePage = () => {
	console.log('---- HomePage is rendering ---')
	return (
		<>
			<Layouts>
				<p> This is home page </p>
			</Layouts>
		</>
	)
}

export default HomePage
