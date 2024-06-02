import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='bg-white mt-5'>
        <div className='flex flex-wrap justify-between items-center'>
            <div className='flex '>
                <Link to="/" className="flex items-center ">
                <img
                    src="https://thumbs.dreamstime.com/z/simple-initial-letter-p-crown-logo-vector-isolated-white-background-usable-business-industries-travel-fashion-274736734.jpg?w=768"
                    className="ml-7 h-12"
                    alt="Logo"
                />
                <h1 className='font-bold font-serif'>GitHub Explorer</h1>
                </Link>
            </div>
          <div className="flex items-center lg:order-2">
                <a
                href="https://github.com/login"  
                target="_blank"
                rel="noreferrer"
                className='duration-200 bg-slate-800 text-white m-2 px-2 py-1 rounded-xl hover:bg-slate-200 hover:text-black inline-block text-center'
                >
                Login to GitHub
                </a>
                <a
                href= "https://github.com/signup?source=login"
                target="_blank"
                rel="noreferrer"
                className='duration-200 bg-slate-800 text-white m-2 px-2 py-1 rounded-xl hover:bg-slate-200 hover:text-black inline-block text-center'
                >
                Getting Started
                </a>
          </div>
          <div className="flex items-center lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                      <NavLink
                      to="/"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                      to="/about"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                      >
                          About
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                      to="/repo"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                      >
                          Repository
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                      to="/followers"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                      >
                          Followers
                      </NavLink>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
      <hr className="mt-5 border-gray-100 sm:mx-auto lg:mt-5" />
    </header>
  )
}

export default Header