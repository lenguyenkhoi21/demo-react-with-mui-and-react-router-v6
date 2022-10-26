import React, { useContext, useEffect } from 'react'
import LayoutHeader from '../header/Layout.Header'
import { Grid } from '@mui/material'
import { UserContext } from '../../../reducer/user/User.Context'

const Layouts = props => {
	console.log(`--- Layoust component is rendering ---`)
	const userCTX = useContext(UserContext)
	useEffect(() => {
		const credential = localStorage.getItem('credential')
		if (userCTX.state.userId !== null || credential !== null) {
			// TODO: Fetch API valid token here
			const validToken = true
			if (!validToken) {
				// Token is inspired
				userCTX.logout()
			}
			userCTX.login({
				userId: '123',
				accessToken: 'Token 01234'
			})
		}
	}, [userCTX.state.userId])

	return (
		<>
			<LayoutHeader />
			<Grid container spacing={0.5}>
				<Grid xs={2} />
				<Grid xs={8}>{props.children}</Grid>
				<Grid xs={2} />
			</Grid>
		</>
	)
}

export default React.memo(Layouts)
