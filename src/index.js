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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
