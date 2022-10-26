import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import { routes } from './route/Routes'
import UserContextContainer from './reducer/user/User.Context.Container'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<UserContextContainer>
			<RouterProvider router={routes} />
		</UserContextContainer>
	</React.StrictMode>
)

reportWebVitals()
