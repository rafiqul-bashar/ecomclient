import React from 'react'
import Hamburger from 'hamburger-react'
import { Icon } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import { GrCart } from "react-icons/gr"
import { Link } from 'react-router-dom'
import {useSelector} from'react-redux'

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)
  const [navBar, setNavbar] = React.useState(false)
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNavbar)
  
  return (
    <nav className={navBar ? "sticky top-0 bg-white z-30" : "sticky top-0 z-30 select-none"}>
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center">
          <div className="logo text-green font-bold text-xl ">HemiStore</div>
          <div className='hidden sm:block ml-8 space-x-3 font-medium'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/products">Products</Link>
            <Link className='navLink' to="/myaccount">My Account</Link>
            <Link className='navLink' to="/auth">Login/Register</Link>
          </div>
        </div>
        <div className="menu flex items-center space-x-3">
          {/* <Icon as={FaSearch} className="text-2xl" /> */}

          <Link to="/mycart">
            <div className='relative'>
              <Icon as={GrCart} className="text-2xl" />
              <span className='header_cart_quantity'>{cartTotalQuantity}</span>
            </div>
          </Link>
          {/* <Icon as={AiOutlineHeart} className="text-3xl" /> */}
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
          </div>
        </div>
      }
    </nav>
  )
}
