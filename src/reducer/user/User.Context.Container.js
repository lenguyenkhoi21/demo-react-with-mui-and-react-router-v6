import React, { useReducer } from 'react'
import { UserContext } from './User.Context'
import { UserReducer } from './User.Reducer'
import { UserDefaultState } from './User.Default.State'
import { USER_ACTION } from './User.Action'

const UserContextContainer = props => {
	const [store, dispatch] = useReducer(UserReducer, UserDefaultState)
	const userProps = {
		state: store,
		addUser: (type, user) => dispatch({ type: type, user: user }),
		login: (type, user) => dispatch({ type: type, user: user }),
		logout: () => dispatch({ type: USER_ACTION.LOGOUT })
	}
	return (
		<div>
			<UserContext.Provider value={userProps}>
				{props.children}
			</UserContext.Provider>
		</div>
	)
}

export default UserContextContainer
