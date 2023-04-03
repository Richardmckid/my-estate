import { CgFacebook } from 'react-icons/cg'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'
import { NavLink } from "@remix-run/react"

const TopNav = () => {
  return (
    <div className="bg-white flex justify-between items-center py-2">
        <div className="flex space-x-6 items-center text-purple-900">
            <CgFacebook/>
            <FaTwitter/>
            <FaLinkedinIn/>
        </div>
        <div className="flex space-x-6 items-center text-purple-900 text-md">
            <NavLink
                to='/register'
                className='flex space-x-1 items-center'
            >
                <BsFillPersonFill/>
                <span >Register</span>
            </NavLink>

            <NavLink
                to='/login'
                className='flex space-x-1 items-center'
            >
                <FiLogIn/>
                <span>Login</span>
            </NavLink>
            <NavLink
                to='/dashboard'
                className='flex space-x-1 items-center'
            >
                <MdDashboard/>
                <span>Dashboard</span>
            </NavLink>
            
        </div>
    </div>
  )
}

export default TopNav