import React, { useContext, useEffect } from 'react'
import LayoutHeader from '../../component/layout/header/Layout.Header'
import { Grid } from '@mui/material'
import { UserContext } from '../../reducer/user/User.Context'
import { useNavigate } from 'react-router-dom'
import { USER_ACTION } from '../../reducer/user/User.Action'

const LoginPage = () => {
  console.log("---- LoginPage is rendering ---")
  const userCTX = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    const credential = localStorage.getItem('credential')
    if (userCTX.state.userId !== null || credential !== null) {
      const validToken = true
      if (validToken) {
        if (userCTX.state.userId === null) {
          userCTX.addUser(USER_ACTION.ADD_USER_COOKIE, credential)
        }
        console.log("Authentication success !")
        navigate('/')
      }
    }
  }, [])

  const onClickLogin = (e) => {
    userCTX.addUser(USER_ACTION.ADD_USER_COOKIE, {
      userId: '123',
      accessToken: 'Token 01234'
    })
  }

	return (
		<>
      <LayoutHeader />
      <Grid container spacing={0.5}>
        <Grid xs={2} />
        <Grid xs={8}>
          <p> This is login page </p>
          <button onClick={onClickLogin}>Login</button>
        </Grid>
        <Grid xs={2} />
      </Grid>
		</>
	)
}

export default LoginPage
