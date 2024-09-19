import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Resume Templates',
            path: '/resume-templates'
        },
        {
            title: 'Job Postings',
            path: '/job-posting'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Premium Membership',
            path: '/premium-membership'
        },
        {
            title: 'Resume Review',
            path: '/resume-review'
        },
        {
            title: 'AI Chat',
            path: '/ai-chat'
        },
        {
            title: 'User Profile',
            path: '/user-profile'
        },
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links.map(link => (
                                <NavLink
                                    to={link.path}
                                    key={link.path}
                                    className={({ isActive }) =>
                                        `ml-4  ${isActive ? 'font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500' : 'text-lg font-semibold'}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/" className="btn btn-ghost text-3xl font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent">
                        Career Canvas

                    </Link>
                    <img className="w-16 h-16" src="/public/Blue White Modern Minimalist Name Logo.png" alt="" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    links.map(link => (
                        <NavLink
                            to={link.path}
                            key={link.path}
                            className={({ isActive }) =>
                                `ml-4  ${isActive ? 'font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500' : 'text-lg font-semibold'}`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </div>
       
    </div>
  );
};

export default Navbar;
