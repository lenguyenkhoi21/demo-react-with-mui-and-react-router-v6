import React, { useContext, useEffect } from 'react'
import LayoutHeader from '../../component/layout/header/Layout.Header'
import { Grid } from '@mui/material'
import { UserContext } from '../../reducer/user/User.Context'
import { useNavigate } from 'react-router-dom'
import { USER_ACTION } from '../../reducer/user/User.Action'
import Layouts from '../../component/layout/page/Layouts'

const LoginPage = () => {
	console.log('---- LoginPage is rendering ---')
	const userCTX = useContext(UserContext)
	const navigate = useNavigate()
	useEffect(() => {
		if (userCTX.state.userId !== null) {
			navigate('/')
		}
	}, [userCTX.state.userId])

	const onClickLogin = e => {
		userCTX.login({
			userId: '123',
			accessToken: 'Token 01234'
		})
	}

	return (
		<>
			<Layouts>
				<p> This is login page </p>
				<button onClick={onClickLogin}>Login</button>
			</Layouts>
		</>
	)
}

export default LoginPage
