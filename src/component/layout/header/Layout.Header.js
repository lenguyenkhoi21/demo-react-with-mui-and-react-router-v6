import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import './Layout.Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../reducer/user/User.Context'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const LayoutHeader = () => {
	console.log('---- LayoutHeader is rendering ---')
	const navigate = useNavigate()
	const userCTX = useContext(UserContext)

	const clickLoginBtn = e => {
		e.preventDefault()
		navigate('/login')
	}

	const clickPrivateBtn = e => {
		e.preventDefault()
		navigate('/private')
	}

	const clickSignup = e => {
		e.preventDefault()
		navigate('/signup')
	}

	return (
		<>
			<Grid container spacing={0.5} className={'layouts-margin'}>
				<Grid xs={2} />
				<Grid xs={8}>
					<Grid container spacing={0} className={'header-content-container'}>
						<Grid xs={2} display={'flex'}>
							<Grid
								display={'flex'}
								justifyContent={'flex-start'}
								alignItems={'center'}>
								<Link to={'/'}>
									<img src={'/logo-final1.png'} height={57} width={244} />
								</Link>
							</Grid>
						</Grid>
						<Grid xs={5} display={'flex'}>
							<Grid
								className={'test-2'}
								display={'flex'}
								justifyContent={'flex-start'}
								alignItems={'center'}>
								<Grid>
									<div className={'button-search'} />
								</Grid>
								<input
									className={'input-search'}
									placeholder={'Enter somethings...'}
								/>
							</Grid>
						</Grid>
						<Grid
							xs={5}
							display={'flex'}
							justifyContent={'flex-end'}
							alignItems={'center'}>
							<Grid>
								<button
									className={'button-add-your-space'}
									onClick={clickPrivateBtn}>
									+ &nbsp;&nbsp; add your space
								</button>
							</Grid>
							{userCTX.state.id === null ? (
								<>
									<Grid>
										<button className={'button-sign-up'} onClick={clickSignup}>
											sign up
										</button>
									</Grid>
									<Grid>
										<button
											className={'button-sign-in'}
											onClick={clickLoginBtn}>
											login
										</button>
									</Grid>
								</>
							) : (
								<>
									<Grid
										className={'profile-user'}
										display={'flex'}
										justifyContent={'space-between'}
										alignItems={'center'}>
										<Grid
											display={'flex'}
											justifyContent={'space-between'}
											alignItems={'center'}>
											<span className={'user-name'}>Muhamad Abiniti</span>
											<ArrowDropDownIcon />
										</Grid>
										<img src={'/photo-cover.jpg'} width={25} height={25} />
									</Grid>
								</>
							)}
						</Grid>
					</Grid>
				</Grid>
				<Grid xs={2} />
			</Grid>
		</>
	)
}

export default React.memo(LayoutHeader)
