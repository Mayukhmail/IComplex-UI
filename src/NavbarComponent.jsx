import React from 'react';
import data from './Navigation.json';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Link} from 'react-router-dom';

function NavbarComponent() {

  const [select, setSelect] = useState(null);

    const dropdown = function (title) {
        setSelect(select === title? null : title);
    }

  return (
    <div className='p-4 bg-[#f8f9fa]'>
        <div className='flex justify-between items-center mx-8'>
            <h1 className='text-2xl font-bold'>iComplex</h1>
            <div className='flex gap-5'>
                {data.navbar.map((menu) => (
                    <div key={menu.title} className='dropdown'>
                        <button className={`cursor-pointer relative ${select === menu.title ? "font-semibold text-[#0079f5]" : ""}`} onClick={() => dropdown(menu.title)}>
                            {menu.title} {select === menu.title ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
                        </button>
                        {select === menu.title && (
                            <div className="border border-[#0079f5]">    
                                <div className='flex flex-col bg-[#ffffff] text-md mt-5 border border-gray-200 -translate-x-5 rounded-sm absolute'>
                                    {menu.items.map((item, index) => (
                                        <React.Fragment key ={item.label}>
                                            <Link key={item.label} to={item.link} className='px-4 py-2 hover:bg-[#ebf5ff] hover:border-b-2 border-[#0079f5]'>{item.label}</Link>
                                            {(menu.title === "TRANSACTION" && [1,4].includes(index)) || 
                                            (menu.title === "REPORT" && [2,6,11].includes(index)) ||
                                            (menu.title === "USER PANEL" && [1].includes(index))? (
                                                <div className="border-t border-gray-300"></div>
                                            ): null}
                                        </React.Fragment>
                                    )
                                    )}
                                </div>
                            </div>
                        )
                        }
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent