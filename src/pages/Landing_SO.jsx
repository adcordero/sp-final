import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../images/bg.png";

const Landing_SO = () => {
  return (
    <main className={`w-full h-screen flex flex-col items-center justify-center font-poppins relative gap-5 p-5`}>

      {/* background image */}
      <div className={`w-full h-screen absolute bg-white/50`}>
        <img src={bg} className={`absolute object-cover object-center w-full h-screen mix-blend-overlay z-0`} />
      </div>

      <div className={`flex-1 flex flex-col w-full h-fit justify-center items-center z-10 gap-7`}>
        {/* name + desc */}
        <div className={`flex flex-col justify-center items-center w-full h-fit z-10 gap-3`}>
          <h1 className={`justify-center items-center uppercase text-2xl font-bold italic`}>
            UPA
          </h1>

          <h3 className={`justify-center items-center text-lg font-normal font-inter w-2/3 text-justify`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>

        {/* buttons */}
        <div className={`flex gap-5 justify-center items-center w-full z-10`}>

          <Link to='/sign-up' className={`p-4 w-1/6 h-fit flex justify-center items-center bg-main-gray rounded-full drop-shadow-lg text-main-violet hover:bg-main-violet hover:text-main-yellow hover:shadow-inner hover:drop-shadow-none`}>
            Sign Up
          </Link>

          <Link to='/log-in' className={`p-4 w-1/6 h-fit flex justify-center items-center bg-main-yellow drop-shadow-lg rounded-full text-main-violet hover:bg-main-violet hover:text-main-yellow hover:shadow-inner hover:drop-shadow-none`}>
            Log In
          </Link>
        </div>
      </div>

      {/* creds */}
      <span className={`p-1 text-sm font-inter`}>
        all rights reserved 2024 UPLB SP 2
      </span>

      {/* <img src={bg} className={`z-0 bg-cover`} /> */}
    </main>
  )
}

export default Landing_SO