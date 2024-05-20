
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Dropdown } from 'react-bootstrap'

const SignUp = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    sex: '',
    email_add: '',
    password: '',
    birthday: '',
    contact_num: ''
  })

  const [confirmPass, setConfirmPass] = useState('')

  // function 

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData)=> {
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }


  return (
    <main className={`h-screen w-full flex items-center justify-center`} >

      <div className={`w-3/6 bg-main-gray/50 rounded-md shadow-lg h-fit p-5 `}>
        
        <div className={`flex flex-col gap-1 items-start justify-center mb-7`}>

          <h1 className={`text-xl font-bold font-poppins`}>Almost there!</h1> 
          <span className={`text-base font-inter`}>We just need a bit more information to create your account...</span>
          
        </div>

        <form className={`flex flex-col items-center gap-5`}>

          <div className={`w-full flex gap-2`}>
            <div className={`flex flex-col gap-2 w-2/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>First Name</label>
              <input placeholder='First Name' name='first_name' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>

            <div className={`flex flex-col gap-2 w-1/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Middle Name</label>
              <input placeholder='Middle Name' name='middle_name' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>

            <div className={`flex flex-col gap-2 w-1/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Last Name</label>
              <input placeholder='Last Name' name='last_name' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>
            
          </div>

          <div className={`w-full flex gap-2`}>
            <div className={`flex flex-col gap-2 w-1/3`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Sex</label>
              <select name='sex' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>

            <div className={`flex flex-col gap-2 w-1/3`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Contact Number</label>
              <input type="tel" id="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" placeholder='09*********' name='contact_num' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>

            <div className={`flex flex-col gap-2 w-1/3`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Birthday</label>
              <input type='date' placeholder='MM/DD/YYYY' name='birthday' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>
          </div>
          
          <div className={`w-full flex gap-2`}>
            <div className={`flex flex-col gap-2 w-2/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Email Address</label>
              <input type='email' placeholder='Email Address' name='email_add' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} />
            </div>

            <div className={`flex flex-col gap-2 w-1/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Password</label>
              <input type='password' placeholder='Password' name='password' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={handleChange} minLength='8' maxLength='16' pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$" />
            </div>

            <div className={`flex flex-col gap-2 w-1/4`}>
              <label className={`text-sm font-inter font-bold pl-1`}>Confirm Password</label>
              <input type='password' placeholder='Password' name='confirmPass' className={`focus:outline-none rounded-sm border-black border-2 p-2 text-sm`} onChange={(event) => setConfirmPass(event.target.value)} minLength='8' maxLength='16' pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$" />
            </div>
          </div>

          <button type='submit' className={`justify-self-center bg-main-yellow rounded-full mt-3 p-1 text-base w-2/4 uppercase font-semibold text-main-violet shadow-md hover:bg-main-violet hover:text-main-yellow font-inter`}>Create Account</button>
        </form>

        <div className={`flex items-center justify-center font-inter text-base pt-2`}>

          <p >Already have an account?&nbsp;</p>
          <Link to='/' className={`text-main-violet font-semibold`}>Login</Link>

        </div>

      </div>

    </main>
  )
}

export default SignUp