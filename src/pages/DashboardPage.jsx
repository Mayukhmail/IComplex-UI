import React from 'react'
import NavbarComponent from '../NavbarComponent'
import StatusBarComponent from '../StatusBarComponent'
import FooterComponent from '../FooterComponent'

function DashboardPage() {
  return (
    <div>
      <StatusBarComponent />
      <NavbarComponent />
      <div className='flex justify-center items-center h-screen text-8xl text-gray-300 '>
        Dashboard
      </div>
      <FooterComponent />
    </div>
  )
}

export default DashboardPage