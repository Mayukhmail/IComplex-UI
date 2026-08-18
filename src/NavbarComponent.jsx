import React from 'react';
import data from './Navigation.json';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

function NavbarComponent() {

  const [select, setSelect] = useState(null);

    const dropdown = function (title) {
        setSelect(select === title? null : title);
    }
  const userData = useSelector((state) => state.user.data);
  const newData = {...userData}
  console.log("This is NavComp", newData[0].navbar);
  return (
    <div className='p-4 bg-(--background-light) shadow-lg z-10 sticky'>
        <div className='flex justify-between items-center mx-8'>
            <h1 className='text-2xl font-bold text-black'>iComplex</h1>
            <div className='flex gap-5'>
                {newData[0].navbar.map((menu) => (
                    <div key={menu.title} className='dropdown'>
                        <button className={`cursor-pointer relative ${select === menu.title ? "font-semibold text-(--primary-color)" : "text-(--text-primary)"}`} onClick={() => dropdown(menu.title)}>
                            {menu.title.toUpperCase()} {select === menu.title ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
                        </button>
                        {select === menu.title && (
                            <div className="border border-(--primary-color)">    
                                <div className='flex flex-col bg-[#ffffff] text-md mt-5 border border-gray-200 -translate-x-5 rounded-sm absolute'>
                                    {menu.items.map((item, index) => (
                                        <React.Fragment key ={item.label}>
                                            <Link key={item.label} to={`/${menu.title.toLowerCase()}/${item.link}`} className='px-4 py-2 hover:bg-[#f3e5f5] hover:border-b-2 border-(--primary-color) hover:text-(--primary-color)'>{item.label}</Link>
                                            {(menu.title === "Transaction" && [1,4].includes(index)) || 
                                            (menu.title === "Report" && [2,6,11].includes(index))? (
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
                {data.navbar.map((menu) => (
                    <div key={menu.title} className='dropdown'>
                        <button className={`cursor-pointer relative ${select === menu.title ? "font-semibold text-(--primary-color)" : "text-(--text-primary)"}`} onClick={() => dropdown(menu.title)}>
                            {menu.title.toUpperCase()} {select === menu.title ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
                        </button>
                        {select === menu.title && (
                            <div className="border border-(--primary-color)">    
                                <div className='flex flex-col bg-[#ffffff] text-md mt-5 border border-gray-200 -translate-x-5 rounded-sm absolute'>
                                    {menu.items.map((item, index) => (
                                        <React.Fragment key ={item.label}>
                                            <Link key={item.label} to={item.link} className='px-4 py-2 hover:bg-[#f3e5f5] hover:border-b-2 border-(--primary-color) hover:text-(--primary-color)'>{item.label}</Link>
                                            {(menu.title === "USER PANEL" && [1].includes(index))? (
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