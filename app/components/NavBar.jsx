import { RiBuilding2Fill } from 'react-icons/ri'
import { NavLink } from "@remix-run/react"
import Container from '../layouts/container'

const NavBar = () => {
    const menuItems = [
        {
            to: '/',
            title: 'Home',
            cta: false,
        },
        {
            to: '/properties',
            title: 'Properties',
            cta: false,
        },
        {
            to: '/land',
            title: 'Land',
            cta: false,
        },
        {
            to: '/blog',
            title: 'Blog',
            cta: false,
        },
        {
            to: '/contact',
            title: 'Contact Us',
            cta: false,
        },
        {
            to: '/create-property-ad',
            title: 'Create Property Ad',
            cta: true,
        },
    ]
  return (
    <div className="bg-purple-900 bg-opacity-75 py-2 w-full">
        <Container>
            <div className="flex justify-between items-center text-white">

                <NavLink className="flex space-x-2 items-center text-white"
                    to='/'
                >
                    <RiBuilding2Fill size={38}/>
                    <h1 className='text-2xl font-bold'>realtors</h1>
                </NavLink>
                <div className="flex space-x-6 items-center">
                    
                    {
                        menuItems.map(item => (
                            <NavLink
                                to={item.to}
                                className={`${item.cta && 'bg-purple-900 p-[8px] rounded px-2'}`}
                            >
                                {item.title}
                            </NavLink>
                        ))
                    }
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NavBar