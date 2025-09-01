import React from 'react'
import { useState, useEffect } from 'react'
import About from './About'
import Program from './program'
import { useContext } from 'react'
import { StoreContext } from '../Appcontext/StoreContext'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {

  const [url, seturl] = useState("photos/lovetolearn.avif")

  useEffect(() => {
    call()
  }, [])


  const chengeimg = async (a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(seturl(a))
      }, 3000)
    })
  }

  const call = async () => {

    await chengeimg("photos/third.jpg")
    await chengeimg("photos/first.jpg")
    await chengeimg("photos/topper.jpg")
    await chengeimg("photos/event3.jpg")
    await chengeimg("photos/event5.jpg")
  }

  const { profile } = useContext(StoreContext)
  const { logout, user } = useAuth0()

  return (

    <>
      <div className="galry relative">

        {profile && <div className='md:w-[20%] w-[65%]  bg-[#F9FAFB] card4 absolute flex flex-col rounded right-0'>
          <div className='h-[6rem] rounded-full mt-[2.5rem] flex justify-center'>
            <img src='photos/profile.png' className="h-[5rem]" />
          </div>
          <p className='text-2xl font-serif text-center my-2 '>{user.name}</p>
          <p className='text-lg font-serif text-center my-2'>{user.email}</p>

          <div className='mb-[3rem] mt-8 '>
            <bitton onClick={() => logout({ logoutParams: { returnTo: "https://college-website-frontend-9yal.onrender.com" } })} className="px-3 py-1 cursor-pointer rounded-2xl text-lg font-serif ml-4 text-white bg-[#EF4444] hover:bg-[#DC2626] ">Logout</bitton>
          </div>
        </div>}

        <img src={url} className='sm:h-screen w-full h-[65vh]'></img>
      </div>

      <div className=' container sm:w-[80%] mx-auto w-[94%]'>

        <About />
        <Program />

      </div>

    </>
  )
}

export default Home
