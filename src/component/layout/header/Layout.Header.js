import React from 'react'
import { Grid } from '@mui/material'
import './Layout.Header.css'
import { Link, useNavigate } from 'react-router-dom'

const LayoutHeader = () => {
  console.log("---- LayoutHeader is rendering ---")
  const navigate = useNavigate()

  const clickLoginBtn = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  const clickPrivateBtn = (e) => {
    e.preventDefault()
    navigate('/private')
  }

	return (
		<>
			<Grid container spacing={0.5} className={'layouts-margin'}>
				<Grid xs={2} />
				<Grid xs={8}>
					<Grid container spacing={0} className={'test'}>
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
								display={'flex'}
								justifyContent={'flex-start'}
								alignItems={'center'}>
								<Grid>
									<div className={'button-abc'} />
								</Grid>
								<input
									className={'input-abc'}
									placeholder={'Enter somethings...'}
								/>
							</Grid>
						</Grid>
						<Grid xs={5} display={'flex'}>
							<Grid
								display={'flex'}
								justifyContent={'flex-end'}
								alignItems={'center'}>
								<Grid>
									<button className={'button-login'}>
										+ &nbsp;&nbsp; add your space
									</button>
								</Grid>
								<Grid>
									<button className={'button-sign-up'} onClick={clickPrivateBtn}>sign up</button>
								</Grid>
								<Grid>
									<button className={'button-xyz'} onClick={clickLoginBtn}>login</button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid xs={2} />
			</Grid>
		</>
	)
}

export default React.memo(LayoutHeader)
