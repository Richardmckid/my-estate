import { Link, NavLink } from "@remix-run/react"
import Container from "../layouts/container"
import { RiBuilding2Fill } from 'react-icons/ri'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
const NavBar = () => {

    const navLinks = [
        {
            title: 'Home',
            link:  '/',
            cta:   false,
        },
        {
            title: 'Listings',
            link:  '/listings',
            cta:   false,
        },
        {
            title: 'Blog',
            link:  '/blog',
            cta:   false,
        },
        {
            title: 'Contact',
            link:  '/contact',
            cta:   false,
        },
        {
            title: 'Create Listing Ad',
            link:  '/create-ad',
            cta:   true,
        },
    ]

    const [showSideNav, setShowSideNav] = useState(false);

    const toggleSideNav = () => {
        setShowSideNav(prev => !prev)
    }
    

    return (
        <>
            
            <div className={`${showSideNav == true ? 'bg-neutral-100 w-3/4 h-full absolute left-0 top-0 z-10 transform transition-all ease-in-out duration-500 shadow-md' : 'hidden'}`}>
                <div className="flex p-4">
                    <AiOutlineClose size={24} className="ml-auto" onClick={() => toggleSideNav()} />
                </div>
                <div className="flex flex-col space-y-6 p-6">
                    {
                        navLinks.map(item => (
                            <Link
                                to={item.link}
                                className={`${item.cta == true ? 'bg-purple-600 py-2 px-3 rounded text-white' : 'border-b pb-2'}`}
                                key={item.title}
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
            
            <nav className="fixed h-16 bg-white shadow w-full flex justify-between items-center">
                
                        
                <div className="w-full custom-container flex justify-between items-center">

                    <div className="flex items-center">
                        <RiBuilding2Fill size={48} className="text-purple-600" />
                    </div>
                    
                    <div className="hidden md:block">

                        <div className="flex items-center space-x-6">
                            {
                                navLinks.map(item => (
                                    <NavLink
                                        to={item.link}
                                        className={`${item.cta == true ? 'bg-purple-600 py-2 px-3 rounded text-white' : ''}`}
                                        key={item.title}
                                        
                                    >
                                        {item.title}
                                    </NavLink>
                                ))
                            }
                            
                        </div>
                    </div>
                    
                    <div className="md:hidden">
                        <HiMenuAlt3 size={40} onClick={() => toggleSideNav()} />
                    </div>

                </div>
                
                        
                        

                        
            
            </nav>
        </>
    )
}

export default NavBar