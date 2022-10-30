import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../page/home/Home.Page'
import LoginPage from '../page/login/Login.Page'
import PrivatePage from '../page/private/PrivatePage'
import SignupPage from '../page/signup/Signup.Page'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: 'signup',
		element: <SignupPage />
	},
	{
		path: '/private',
		element: <PrivatePage />
	}
])
