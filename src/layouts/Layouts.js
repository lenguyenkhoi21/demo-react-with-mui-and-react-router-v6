import React from 'react'
import LayoutHeader from '../component/layout/header/Layout.Header'

const Layouts = props => {
	return (
		<>
			<LayoutHeader />
			{props.children}
		</>
	)
}

export default Layouts
