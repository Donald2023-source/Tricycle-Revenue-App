import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { VscNotebook } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { NavLink }  from 'react-router-dom'
import logo from '../assets/logo.jpg';
import { BiMenuAltLeft } from "react-icons/bi";

const Aside = () => {

    const navLinks = [ 
        {
            name: 'Dashboard',
            icon: <LuLayoutDashboard />,
            to: '/dashboard'
        },

        {
            name: "Payments", 
            icon: <MdOutlinePayments/>,
            to: "/payments"
        }, 

        {
            name: "Transactions", 
            icon: <VscNotebook />,
            to: '/transaction'
        },

        {
            name: "Settings",
            icon: <CiSettings/>,
            to: '/settings'
        }
    ]
    
  return (
      <aside className='lg:w-[22%] w-[70%] top-0 z-[100] bg-white fixed shadow-md lg:text-md text-xs  p-5 h-[100vh]'>
          <img className='h-10 mb-5' src={logo} alt="" />
        <div className='flex flex-col justify-between h-[80%] lg:h-[90%]'>

            <div className='flex flex-col mt-5 gap-4'>
                {navLinks.map((link, index) => {
                    return (
                        <div className='' key={index}>
                            <NavLink className={(({isActive}) => `p-3 flex items-center gap-3 transition-all hover:bg-myGreen hover:text-white rounded-xl ${isActive && 'bg-myGreen text-white w-[100%] rounded-xl'}`)} to={link.to}>
                                <span className='text-xl'>{link.icon}</span>
                                <h2 className='text-base'>{link.name}</h2>
                            </NavLink>
                        </div>
                    )
                })}
            </div>

            <hr />
            
            <div className='p-3 flex flex-col gap-4'>
                <h2>Refer a Friend</h2>
                <h2>Support</h2>
                <span className='flex items-center gap-3 '>
                    Log out
                    <IoIosLogOut />
                </span>
            </div>
        </div>
      </aside>
  )
}

export default Aside