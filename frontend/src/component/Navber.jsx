import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { useContext } from 'react'
import { StoreContext } from '../Appcontext/StoreContext'

const Navber = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const { setProfile, profile } = useContext(StoreContext)

  return (
    <nav className='bg-[#812972] sm:h-20 h-14 text-white flex justify-between items-center sticky'>
      <div className='xl:pl-44 md:pl-20 pl-2'>
        <div className='font-bold md:text-[1.5rem] text-[1rem]'><NavLink to="/" >Durga Modren</NavLink> </div>
        <div className='font-bold md:text-[1.2rem] text-[.75rem] md:ml-32 ml-14'><NavLink to="/" >Inter College</NavLink></div>
      </div>

      <ul className='flex md:gap-8 gap-2 md:pr-30 pr-2'>
        <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer sm:flex hidden'><NavLink to="/" >HOME</NavLink></li>
        <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'><NavLink to="/Payment">ONLINE FEE</NavLink></li>
        <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'><NavLink to="/adimisson">ADIMISSION</NavLink></li>
        <li>{isAuthenticated ? <div className='bg-white rounded-full h-2.5rem'>
          <img src="photos/profile.png" onClick={() => setProfile(!profile)} className='h-8 rounded-2xl cursor-pointer' />
        </div> :
          <button onClick={loginWithRedirect} className='bg-[#A64CA6] hover:bg-[#6A225C] px-3 py-1 border-1 border-white items-center rounded-xl text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'>Sing In</button>}
        </li>
      </ul>

    </nav>
  )
}

export default Navber
