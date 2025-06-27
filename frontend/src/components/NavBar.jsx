import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { assets, specialityData, doctors } from '../assets/assets_frontend/assets';


const NavBar = () => {

     const navigate = useNavigate();

     const [showMenu, setShowMenu] = React.useState(false);
     const [token, setToken] = React.useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-gray-300 '>
        <img src={assets.logo3} alt="Logo"  />
        <ul className='hidden md:flex items-start gap-6 font-medium '>
            <NavLink to="/">
                <li className= 'py-1'>
                    HOME
                </li>
                <hr className='outline-none border-none h-0.5 bg-(--primary) w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/">
                <li className= 'py-1'>
                    ALL DOCTORS
                </li>
                <hr className='outline-none border-none h-0.5 bg-(--primary) w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className= 'py-1'>
                    ABOUT US
                </li>
                <hr className='outline-none border-none h-0.5 bg-(--primary) w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/contact">
                <li className= 'py-1'>
                    CONTACT US
                </li>
                <hr className='outline-none border-none h-0.5 bg-(--primary) w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? (
                   <div className='flex items-center gap-2 group relative cursor-pointer'>
                    <img className="w-8 rounded-full" src={assets.profile_pic} alt='pic'/>
                    <img className="w-2.5" src={assets.dropdown_icon} alt='pic'/>
                    <div className='absolute top-0 right-0  text-base  rounded-lg pt-14 font-semibold z-20 hidden group-hover:block'>
                    <div className='bg-stone-100 min-w-48 shadow-lg rounded-lg p-4 flex flex-col gap-2'>
                        <p onClick={() => navigate('my-profile')} className='hover:text-blue-700 cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('my-appointment')} className='hover:text-blue-700 cursor-pointer'>My Appointments</p>
                        <p onClick={() => setToken(false)} className='hover:text-blue-700 cursor-pointer'>Logout</p>
                    </div>
                    </div>

                    

                    </div>

                ) : (
                    <button onClick={() => navigate('/login')} className='bg-(--primary) text-white px-4 py-2 rounded-3xl font-medium hover:bg-emerald-700 transition-all duration-300'>
                Create Account
            </button>
                )
            }
            
        </div>
    </div>
  )
}

export default NavBar