import React from 'react'

function StatusBarComponent() {

  function getTodayDate(){
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.toLocaleString("en-US", {month:"long"});;
    const dd = String(today.getDate()).padStart(2, "0");
    return `${dd} / ${mm} / ${yyyy}`; // format: YYYY-MM-DD
  }
    
  return (
    <div className='flex justify-between p-2 text-white px-10 bg-[#479cf1]'>
        <div><h1>Welcome: Administrator</h1></div>
        <div>{getTodayDate()}</div>
    </div>
  )
}

export default StatusBarComponent