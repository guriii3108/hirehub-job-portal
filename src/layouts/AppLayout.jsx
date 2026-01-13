import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '@/components/Header'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      {/* all out components are rendered at this particular space*/}
      <main className='min-h-screen container mx-auto'>
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-transparent mt-10">
        Made with <span className="text-red-500 animate-pulse">💗</span> by <a href="https://github.com/guriii3108" className="hover:underline">Guri</a>
      </footer>
    </div>
  )
}

export default AppLayout