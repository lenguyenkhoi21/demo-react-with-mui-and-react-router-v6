import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../reducer/user/User.Context'
import LayoutHeader from '../../component/layout/header/Layout.Header'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PrivatePage = () => {
  const userCTX = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    const credential = localStorage.getItem('credential')
    if (userCTX.state.userId !== null || credential !== null) {
      const validToken = true
      if (!validToken) {
        userCTX.logout()
        navigate('/login')
        console.log("Authentication failed")
      }
    } else {
      userCTX.logout()
      navigate('/login')
      console.log("Authentication failed")
    }
  }, [])

  return (
    <div>
      <LayoutHeader />
      <Grid container spacing={0.5}>
        <Grid xs={2} />
        <Grid xs={8}>
          <p> This is private page </p>
        </Grid>
        <Grid xs={2} />
      </Grid>
    </div>
  )
}

export default PrivatePage
