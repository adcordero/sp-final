import React from 'react'
import { Link } from 'react-router-dom'
// import bg fromj '../assets/bg.png';
import bg from "../images/bg.png"
import NavBar from '../components/NavBar'
import supabase from '../configs/supabaseClient'
import logo from '../images/LOGO.png'

const Home = () => {

  console.log(supabase)

  return (
    <main className={`bg-main-white`}>

      <div className={`w-full h-screen flex gap-5`}>

        {/* left side */}
        <div className={`w-1/2 p-5 flex flex-col items-center justify-center gap-4`}>

          <img src={logo} className={`w-1/6 rounded`} />
        
          <h1 className={`text-2xl font-bold font-poppins`}>Ubiquitary Property Assitant</h1>
          <span>lorem ipsum</span>
        </div>

        {/* right side */}
        <div className={`w-1/2 p-5 flex items-center justify-center`}>

          <div className={`w-3/4 h-fit bg-main-gray/50 p-5 rounded-md shadow-lg`} >

            <div className={`flex  flex-col items-center justify-center`}>

              <h1 className={`text-2xl font-bold font-poppins`}>Welcome back!</h1>

              <h3 className={`text-lg font-poppins`}>Login to see your dashboard...</h3>

            </div>

            <form className={`flex flex-col gap-5 items-center`}>

              <div className={`flex flex-col gap-1 w-full font-poppins`}>

                <label className={``}>Email</label>
                <input placeholder='Email Address' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} />

              </div>

              <div className={`flex flex-col gap-1 w-full`}>

                <label className={``}>Password</label>
                <input placeholder='Password' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} />

              </div>

              <button type='submit' className={`justify-self-center bg-main-yellow rounded-full p-1 text-base w-2/4 uppercase font-semibold text-main-violet shadow-md hover:bg-main-violet hover:text-main-yellow font-inter`}>Login</button>

            </form>

            <div className={`flex items-center justify-center pt-2 font-inter text-base`}>

              <p >Don't have an account yet?&nbsp;</p>
              <Link to='/sign-up' className={`text-main-violet font-semibold`}>Register</Link>

            </div>

          </div>

        </div>
        
      </div>

    </main>
  )
}

export default Home