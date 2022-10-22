import React from 'react'
import { Grid } from '@mui/material'
import './Layout.Margin.css'

const LayoutMargin = props => {
	return (
		<>
			<Grid container spacing={0.5}>
				<Grid xs={2} />
				<Grid xs={8}>{props.children}</Grid>
				<Grid xs={2} />
			</Grid>
		</>
	)
}

export default React.memo(LayoutMargin)
