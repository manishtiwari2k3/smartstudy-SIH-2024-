import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth.js"
import {logout } from "../../store/authSlice.js"

function LogoutBtn() {
    const dispatch = useDispatch()

    const lougoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200  hover:bg-zinc-100 hover:text-blue-600 rounded-full text-white'
    onClick={lougoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn