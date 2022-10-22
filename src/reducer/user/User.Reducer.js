import { USER_ACTION } from './User.Action'
import { UserDefaultState } from './User.Default.State'

export const UserReducer = (state, action) => {
	switch (action.type) {
		case USER_ACTION.ADD_USER_COOKIE:
			localStorage.setItem('credential', JSON.stringify(action.user))
			return { ...action.user }
		case USER_ACTION.LOGIN:
			return { ...action.user }
		case USER_ACTION.LOGOUT:
			localStorage.removeItem('data')
			return { ...UserDefaultState }
		default:
			return state
	}
}
