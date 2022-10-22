import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../page/home/Home.Page'
import LoginPage from '../page/login/Login.page'
import PrivatePage from '../page/private/PrivatePage'

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
    path: '/private',
    element: <PrivatePage />
  }
])
