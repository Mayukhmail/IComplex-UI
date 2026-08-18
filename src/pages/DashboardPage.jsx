import React from 'react'
import NavbarComponent from '../NavbarComponent'
import StatusBarComponent from '../StatusBarComponent'
import FooterComponent from '../FooterComponent'

function DashboardPage() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen m-0'>
      <div className=''>
        <NavbarComponent />
      </div>
      <div className='flex justify-center items-center text-8xl text-gray-300 row-span-1 bg-linear-to-t from-[#EFE9F2] from-10% to-white'>
        Dashboard
      </div>
      <div className=''>
        <FooterComponent />
      </div>
    </div>
  )
}

export default DashboardPage