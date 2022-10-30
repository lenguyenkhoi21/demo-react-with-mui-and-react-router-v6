import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../reducer/user/User.Context'
import { useNavigate } from 'react-router-dom'
import Layouts from '../../component/layout/page/Layouts'
import { Grid } from '@mui/material'
import './Login.Page.css'
import { API_DOMAIN } from '../../util/Constant'

const LoginPage = () => {
	console.log('---- LoginPage is rendering ---')
	const userCTX = useContext(UserContext)
	const navigate = useNavigate()

	const [user, setUser] = useState({
		userName: null,
		password: null
	})

	useEffect(() => {
		if (userCTX.state.id !== null) {
			navigate('/')
		}
	}, [userCTX.state.id])

	const onClickLogin = e => {
		e.preventDefault()
		fetch(`${API_DOMAIN}/api/auth/signin`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(user)
		})
			.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					// Login Failed
				}
			})
			.then(data => {
        console.log(data)
				userCTX.login(data)
			})
	}

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

	return (
		<>
			<Layouts>
				<Grid display={'flex'} justifyContent={'center'}>
					<div className={'login-form-container'}>
						<form>
							<Grid
								className={'input-title'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}>
								<p className={'input-title-text'}>
									{' '}
									Log in and explore Coworker{' '}
								</p>
							</Grid>
							<Grid
								className={
									'input-login-container input-login-container-username'
								}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'input-login-icon'} />
								<input
									name={'userName'}
									onChange={onChange}
									className={'input-login-text'}
									placeholder={'User Email'}
								/>
							</Grid>
							<Grid
								className={
									'input-login-container input-login-container-password'
								}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'input-password-icon'} />
								<input
									onChange={onChange}
									name={'password'}
									type={'password'}
									className={'input-login-text'}
									placeholder={'Password'}
								/>
							</Grid>
							<button
								className={'button-login-container'}
								onClick={onClickLogin}>
								Login
							</button>
						</form>
					</div>
				</Grid>
			</Layouts>
		</>
	)
}

export default LoginPage
