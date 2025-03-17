import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Import the logo
import { User } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const location = useLocation(); // Get current URL path

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 sticky top-0 z-20 w-full shadow-md flex justify-between items-center h-16 px-0 lg:px-0 m-0 p-0">
      {/* Logo */}
      <img className="w-24 h-full ml-[-10px]" src={logo} alt="Logo" />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-between items-center w-8 h-6 space-y-1"
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Toggle navigation"
      >
        <div className="w-6 h-1 bg-gray-600"></div>
        <div className="w-6 h-1 bg-gray-600"></div>
        <div className="w-6 h-1 bg-gray-600"></div>
      </button>

      {/* Nav Links */}
      <ul
        className={`lg:flex gap-6 items-center ${isNavOpen ? "block" : "hidden"} lg:block transition-all ease-in-out duration-300`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Rentals", path: "/rentals" },
          { name: "Testimonials", path: "/testimonials" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`px-3 py-2 ${
                isActive(link.path)
                  ? "text-blue-500 border-b-2 border-blue-500" // Active style
                  : "hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Dropdown Menu for More */}
        <li
          className="relative"
          onMouseEnter={() => setIsMoreOpen(true)}
          onMouseLeave={() => setIsMoreOpen(false)}
        >
          <button className="hover:text-blue-500 px-3 py-2">More ▼</button>
          {isMoreOpen && (
            <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-48 py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/settings">Settings</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/saved-listings">Saved Listings</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Buttons & Profile */}
      <div className="flex gap-5 items-center">
        <Link to="/postproperty">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            POST PROPERTY
          </button>
        </Link>
      
        <Link to="/new_login">
          <button className="bg-gray-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Login
          </button>
        </Link>

        {/* Profile Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
            <User className="w-6 h-6 text-gray-700" />
          </button>

          {isProfileOpen && (
            <ul className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 w-40 py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/settings">Settings</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 text-red-500">
                <button>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
