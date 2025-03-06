import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/page.jsx'
import Auth from './pages/auth/page.jsx'
import Cart from './pages/cart/page.jsx'
import Plates from './pages/plates/page.jsx'
import Profile from './pages/profile/page.jsx'

const pages = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home/> },
			{ path: '/auth', element: <Auth/> },
			{ path: '/cart', element: <Cart/> },
			{ path: '/plates', element: <Plates/> },
			{ path: '/profile', element: <Profile/> },
		]
	}
])

createRoot(document.getElementById('root')).render(
  	<StrictMode>
    	 <RouterProvider router={pages}></RouterProvider>
  	</StrictMode>,
)
