import React, { useState } from 'react'
import "./css-style/NavBar.css"
import img from '../assets/DevScrypt-logo1.png'

function NavBar() {


    return (
        <div className='nav-layer-1'>
            <img className="first-logo  rounded-full" src={img} alt="yyyyy" />
            <div>
                <nav classNameName="nav-1 bg-gray-800">
                    <div classNameName="layer-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="layer-2 relative flex  items-center justify-between">
                            <div className=" layer-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/* <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"/>
                </div> */}
                                <div className="hidden md:flex space-x-6">
                                    <div className="flex space-x-4">
                                        <a href="#" className="f1 rounded-md  px-3 py-2 text-sm font-medium hover:bg-gray-700 "
                                            aria-current="page">Dashboard</a>
                                        <a href="#"
                                            className="f1 rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 ">Team</a>
                                        <a href="#"
                                            className="f1 rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 ">Projects</a>
                                        <a href="#"
                                            className="f1 rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 ">Calendar</a>
                                        {/* <a href="#"
                                            className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white">Calendar</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                    </svg>
                                </button>
                                <div className="relative ml-3 mr-5">
                                    <div>
                                        <button type="button"
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-5 w-5 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="md:hidden" id="mobile-menu">
                    {/* <div class="space-y-1 px-2 pb-3 pt-2">
                            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                        </div> */}

                    <div className='nav-2'>
                        <div class="navbar">
                            <div class="navbar-container container">
                            <img className="first-logo-hid  rounded-full" src={img} alt="yyyyy" />
                                <input type="checkbox" name="" id="" />
                                <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>
                                {/* <img className="first-logo-hid  rounded-full" src={img} alt="yyyyy" /> */}
                                <ul class="menu-items">
                                    <li><a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page">Dashboard</a>
                                    </li>
                                    <li><a href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                    </li>
                                    <li><a href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                    </li>
                                    <li><a href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                                    </li>
                                </ul>
                                <h2 class="logo">Seller-Mode</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="side-button bg-opacity-0  ">Seller-Mode</button>
        </div>
    );
}


export default NavBar