import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/LOGO.png'

const NavBar = () => {

    var [currentPage, settingCurPage] = useState('Home')

    function setCurrentPage(page) {
        settingCurPage(page)
    }
    // console.log(currentPage.currentPage)
    var pages = [
        { tag: "Home", route: '/' },
        { tag: "Services", route: '/services' },
        { tag: "About Us", route: '/about-us' },
    ]

  return (
    <header className={`bg-main-violet shadow-md`}>
        <div className={`flex items-center py-5 px-10 mx-auto font-poppins justify-between`}>
            {/* LOGO + NAME */}
            <div className={`flex gap-2 items-center justify-start`}>
                {/* <div className={`bg-main-yellow w-fit h-fit text-main-violet p-2 font-bold`}>
                        UPA
                </div> */}
                <img src={logo} className={`w-12 rounded`} />
                
                <span className={`text-main-yellow text-md`}>
                    Ubiquitary Property Assitant
                </span>
            </div> 

            {/* login signup */}
            <div className={`flex gap-2 justify-end items-center w-1/4 text-base `}>

                {/* <Link to='/sign-up' className={`p-2 w-2/6 h-fit flex justify-center items-center bg-main-gray rounded-full drop-shadow-lg text-main-violet hover:bg-main-violet hover:text-main-yellow hover:shadow-inner hover:drop-shadow-none hover:shadow-main-gray`}>
                    Sign Up
                </Link> */}

                {
                    pages.map((place, index) => (
                        <Link to={place.route} className={`text-main-yellow hover:underline ${currentPage == place.tag ? 'underline' : 'no-underline'}`} onClick={() => (setCurrentPage(place.tag))}>
                            {place.tag}
                        </Link>
                    ))
                }

                <Link to='/log-in' className={`p-2 w-2/6 h-fit flex justify-center items-center bg-main-gray drop-shadow-lg rounded-full text-main-violet hover:bg-main-yellow hover:text-main-violet hover:shadow-inner hover:drop-shadow-none `} onClick={() => (setCurrentPage("none"))}>
                    Log In
                </Link>
            </div>
        </div>
    </header>
  )
}

export default NavBar