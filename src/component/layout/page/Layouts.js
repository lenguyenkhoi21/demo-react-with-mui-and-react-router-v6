import React, { useContext, useEffect } from 'react'
import LayoutHeader from '../header/Layout.Header'
import { Grid } from '@mui/material'
import { UserContext } from '../../../reducer/user/User.Context'
import { API_DOMAIN } from '../../../util/Constant'

const Layouts = props => {
	console.log(`--- Layoust component is rendering ---`)
	const userCTX = useContext(UserContext)
	useEffect(() => {
		const credential = localStorage.getItem('credential')
		if (
			userCTX.state.id !== null ||
			(credential !== null && credential !== undefined)
		) {
			const json = JSON.parse(credential)
			fetch(`${API_DOMAIN}/api/auth/refreshtoken`, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify({
					refreshToken: json.refreshToken
				})
			}).then(response => {
				if (response.status === 200) {
					userCTX.login(json)
				} else {
					userCTX.logout()
				}
			})
		}
	}, [userCTX.state.id])

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
