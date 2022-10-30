import React, { useContext, useEffect } from 'react'
import Layouts from '../../component/layout/page/Layouts'
import { UserContext } from '../../reducer/user/User.Context'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import './Signup.Page.css'

const SignupPage = () => {
	const userCTX = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (userCTX.state.id !== null) {
			navigate('/')
		}
	}, [userCTX.state.id])

	return (
		<>
			<Layouts>
				<Grid display={'flex'} justifyContent={'center'}>
					<div className={'signup-form-container'}>
						<form>
							<Grid
								className={'signup-title-margin'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}>
								<p className={'signup-title'}>
									Welcome ! Create your account now.
								</p>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-login-icon'} />
								<input
									className={'signup-login-text'}
									placeholder={'Enter username'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'password'}
									className={'signup-login-text'}
									placeholder={'Password'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'password'}
									className={'signup-login-text'}
									placeholder={'Confirm Password'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'text'}
									className={'signup-login-text'}
									placeholder={'Full name'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'number'}
									className={'signup-login-text'}
									placeholder={'Phone number'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'email'}
									className={'signup-login-text'}
									placeholder={'Email'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<div className={'signup-login-text'}>
									<input type='radio' id='age1' name='age' value='Male' />
									<label htmlFor={'age1'}> Male </label>
									<input type='radio' id='age1' name='age' value='Female' />
									<label htmlFor={'age1'}> Female </label>
									<input type='radio' id='age1' name='age' value='Other' />
									<label htmlFor={'age1'}> Other </label>
								</div>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'text'}
									className={'signup-login-text'}
									placeholder={'Address'}
								/>
							</Grid>
							<Grid
								className={'input-signup-container input-signup-text-container'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}>
								<div className={'signup-password-icon'} />
								<input
									type={'file'}
									className={'signup-login-text'}
									placeholder={'Avatar'}
								/>
							</Grid>
							<button className={'button-signup-container'}> Register </button>
						</form>
					</div>
				</Grid>
			</Layouts>
		</>
	)
}

export default SignupPage
