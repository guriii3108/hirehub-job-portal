import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      AppLayout
      {/* all out components are rendered at this particular space*/}
      <Outlet />
    </div>
  )
}

export default AppLayout