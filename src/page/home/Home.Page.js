import React from 'react'
import './Home.Page.css'
import { Grid } from '@mui/material'
import LayoutHeader from '../../component/layout/header/Layout.Header'

const HomePage = () => {
  console.log("---- HomePage is rendering ---")
	return (
		<>
      <LayoutHeader />
			<Grid container spacing={0.5}>
				<Grid xs={2} />
				<Grid xs={8}>
					<p> This is home page </p>
				</Grid>
				<Grid xs={2} />
			</Grid>
		</>
	)
}

export default HomePage
