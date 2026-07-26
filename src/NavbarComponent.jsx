import React from 'react'
import data from './Navigation.json'

function NavbarComponent() {
    // console.log(data);
  return (
    <div className='p-4 bg-[#f8f9fa]'>
        <div className='flex justify-between items-center mx-8'>
            <h1 className='text-2xl font-bold'>iComplex</h1>
            <div className='flex gap-5'>
                {data.map((item, index) => (
                    <div key={index}>
                        {item.title} 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent