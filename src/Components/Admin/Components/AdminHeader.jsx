import { Icon } from '@chakra-ui/react'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
export default function AdminHeader() {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <nav className='sticky top-0 bg-white z-30'>
            <div className="container flex items-center justify-between py-6">
                <div className="flex items-center">
                    <Link  to="/">
                        <div className="logo text-green font-bold text-xl ">HemiStore</div>
                    </Link>
                    <div className='hidden sm:block ml-8 space-x-3 font-medium'>
                        <Link className='navLink' to="/">Home</Link>
                        <Link className='navLink' to="/products">Products</Link>
                        <Link className='navLink' to="/myaccount">My Profile</Link>

                    </div>
                </div>
                <div className="menu flex items-center space-x-3">
                    <Icon as={FaRegUser} className="text-2xl" />
                    <Link className='hidden md:flex' to="/myaccount">
                        Rafiqul Bashar
                    </Link>
                    <Icon as={FiLogOut} className="text-3xl" />
                    <div className="sm:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen &&
                <div className="container">
                    <div className='sm:hidden flex flex-col'>
                        <Link onClick={() => setOpen(false)} className='navLink' to="/">Home</Link>
                        <Link onClick={() => setOpen(false)} className='navLink' to="/products">Products</Link>
                        <Link onClick={() => setOpen(false)} className='navLink' to="/myaccount">My Account</Link>
                        <Link onClick={() => setOpen(false)} className='navLink' to="/auth">Login/Register</Link>
                        <div onClick={() => setOpen(false)}>Logout</div>
                    </div>
                </div>
            }
        </nav>
    )
}
