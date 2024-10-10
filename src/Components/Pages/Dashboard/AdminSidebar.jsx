import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className={`fixed inset-0 bg-gray-800 shadow-lg transition-transform transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:w-64 w-64 h-full z-30`}>
                <div className="p-6 h-full">
                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                    <nav className="mt-10">
                        <ul>
                            <li>
                                <Link to="/" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3a7 7 0 00-5.874 11.164A7.001 7.001 0 0010 17a7.001 7.001 0 005.874-2.836A7 7 0 0010 3zm0 10a3 3 0 110-6 3 3 0 010 6z" />
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage-users" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v4h-2V3H8v3H6V2zM4 8a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm2 2v8h8V10H6z" />
                                    </svg>
                                    <span className="ml-3">Manage Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-products" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10h4l3 8h6l3-8h4l-7-8H9L2 10zm4 2l2-4 2 4H6zm2 0h4l-2 4h-4l2-4z" />
                                    </svg>
                                    <span className="ml-3">Manage Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/orders" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zM2 10a1 1 0 011-1h3a1 1 0 110 2H3a1 1 0 01-1-1zm14-1a1 1 0 100 2h3a1 1 0 100-2h-3zM5.293 14.293a1 1 0 011.414 0L10 17.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    <span className="ml-3">Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3a8 8 0 100 16 8 8 0 000-16zM10 4a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zm1 10h-2v-2h2v2z" />
                                    </svg>
                                    <span className="ml-3">Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/logout" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3a1 1 0 00-1 1v3H7a1 1 0 100 2h2v3a1 1 0 102 0v-3h2a1 1 0 100-2h-2V4a1 1 0 00-1-1z" />
                                    </svg>
                                    <span className="ml-3">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="w-full p-10 h-full">
                <div className='flex justify-end'>
                <button
                    className="md:hidden p-2 text-gray-300 hover:bg-gray-700"
                    onClick={toggleSidebar}
                >
                    {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
                </div>
                <h2 className="text-3xl font-semibold">Welcome to Admin Dashboard</h2>
                <Outlet /> {/* This will render child routes here */}
            </div>
        </div>
    );
};

export default AdminSidebar;
