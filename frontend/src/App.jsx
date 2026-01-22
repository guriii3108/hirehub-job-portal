import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Jobs from './pages/Jobs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/jobs',
      element: <Jobs />
    }
  ])
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App