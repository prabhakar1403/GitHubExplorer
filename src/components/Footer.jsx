import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

            <div className='flex mb-6 md:mb-0'>
                <Link to="/" className="flex items-center ">
                <img
                    src="https://thumbs.dreamstime.com/z/simple-initial-letter-p-crown-logo-vector-isolated-white-background-usable-business-industries-travel-fashion-274736734.jpg?w=768"
                    className="mr-1 h-20 mx-20"
                    alt="Logo"
                />
                <h1 className='font-bold font-serif text-2xl'>GitHub Explorer</h1>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4 m-2">
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li className="mb-4 m-2">
                            <Link to="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li className="mb-4 m-2">
                            <Link to="/Contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                            <a
                                href="https://github.com/prabhakar1403"
                                className="hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">
                                Discord
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
        <div>
            <span className="text-sm text-gray-500 sm:text-center">
                © 2023 Prabhakar Singh. All Rights Reserved.
            </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer