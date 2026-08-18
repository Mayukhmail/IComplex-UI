import React from 'react'

function FooterComponent() {


   function getTodayDate(){
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.toLocaleString("en-US", {month:"long"});;
    const dd = String(today.getDate()).padStart(2, "0");
    return `${dd} / ${mm} / ${yyyy}`; // format: YYYY-MM-DD
  }

  return (
    <div className='flex justify-between p-2 bg-amber-50'>
      <div>
        <div>Welcome: {sessionStorage.getItem("fullname")}</div>
        <div>{getTodayDate()}</div>
      </div>
      <div className='flex justify-center items-center p-4'>
        Contact Us - 9830303181  |  Mail Us - mayukhmail@gmail.com  |  Version (2026.05:004.009)
      </div>
  </div>
  )
}

export default FooterComponent