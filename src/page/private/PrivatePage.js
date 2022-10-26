import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../reducer/user/User.Context'
import { useNavigate } from 'react-router-dom'
import Layouts from '../../component/layout/page/Layouts'

const PrivatePage = () => {
	console.log(`--- Component PrivatePage is rendering`)
	const userCTX = useContext(UserContext)
	const navigate = useNavigate()
	useEffect(() => {
		if (userCTX.state.userId === null) {
			navigate('/login')
		}
	}, [userCTX.state.userId])

	return (
		<>
			<Layouts>
				<p> This is private page </p>
			</Layouts>
		</>
	)
}

export default PrivatePage
