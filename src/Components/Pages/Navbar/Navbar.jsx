import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('LogOut Successful!!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Navbar Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Home
            </NavLink>
            <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="ml-4 cursor-pointer text-lg font-semibold">
            Resume Templates
          </label>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink
              to="/resume-templates/Resume_Templates"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Make resume
            </NavLink>

          </ul>
        </div>
            <NavLink
              to="/job-posting"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Job Postings
            </NavLink>
            <NavLink
              to="/premium-membership"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Premium Membership
            </NavLink>
            <NavLink
              to="/resume-review"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Resume Review
            </NavLink>
            {
              user &&   <NavLink
              to="/user-profile"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              User Profile
            </NavLink>
            }
          
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          {/* <Link
            to="/"
            className="btn btn-ghost text-3xl font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent"
          >
            Career Canvas
          </Link> */}
          <img
            className="w-24 h-20  rounded-full"
            src="/Blue White Modern Minimalist Name Logo.png"
            alt="Career Canvas Logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Desktop Links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          Home
        </NavLink>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="ml-4 cursor-pointer text-lg font-semibold">
            Resume Templates
          </label>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink
              to="/resume-templates/Resume_Templates"
              className={({ isActive }) =>
                `ml-4 ${isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
                  : "text-lg font-semibold"
                }`
              }
            >
              Make resume
            </NavLink>

          </ul>
        </div>
        <NavLink
          to="/job-posting"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          Job Postings
        </NavLink>
        <NavLink
          to="/premium-membership"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          Premium Membership
        </NavLink>
        <NavLink
          to="/resume-review"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          Resume Review
        </NavLink>
        <NavLink
          to="/user-profile"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          User Profile
        </NavLink>
        <NavLink
          to="/ai-chat"
          className={({ isActive }) =>
            `ml-4 ${isActive
              ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-lg border-b-2 border-green-500"
              : "text-lg font-semibold"
            }`
          }
        >
          CC Ai
        </NavLink>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/user-profile">
              <span className="font-bold text-lg">{user.displayName}</span>
            </Link>


            <button onClick={handleLogOut} className="ml-2 px-5 py-2.5 relative rounded group overflow-hidden font-bold text-lg bg-purple-50 text-green-500 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 border-2 border-green-500 bg-green-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Log Out</span>
            </button>
          </>
        ) : (
          <>
            {/* sign in button */}
            <Link to="/signin" className="mr-2 px-5 py-2.5 relative rounded group overflow-hidden font-bold text-lg bg-purple-50 text-green-500 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 border-2 border-green-500 bg-green-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Sign In</span>
            </Link>
            {/* sign up button */}
            <Link to="/signup" className="px-5 py-2.5 relative rounded group overflow-hidden font-bold text-lg bg-purple-50 text-green-500 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 border-2 border-green-500 bg-green-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Sign Up</span>
            </Link>

          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;