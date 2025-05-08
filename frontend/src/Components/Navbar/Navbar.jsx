import { FaShoppingCart, FaHeart, FaUser, FaInfoCircle, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  // State to control mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // Reference to the mobile menu
  const menuRef = useRef(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar Top */}
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full mx-4">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            Fresh dairy products delivered daily
          </p>
          <div className="navbar_top_right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white"
            >
              <option>ENG</option>
              <option>Hindi</option>
            </select>
            <button>
              <Link to="/faqs" className="text-sm text-white font-inter font-normal capitalize">
                FAQs
              </Link>
            </button>
            <button>
              <Link to="/help" className="flex items-center text-sm text-white font-inter font-normal capitalize">
                <FaInfoCircle /> Need Help?
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Middle */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full mx-4 h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-3xl font-bold font-inter text-[#007580] hover:text-[#029fae] transition-colors duration-300 capitalize flex items-center gap-2"
            >
              Gokul <span className="text-[#f5a623]">Dairy</span>
            </Link>
          </div>

          {/* Search Box */}
          <div className="search_box">
            <form action="#" className="max-w-[443px] h-[44px] relative">
              <input
                type="text"
                placeholder="Search dairy products..."
                className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4"
              />
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <FaSearch size="22px" color="#272343" />
              </button>
            </form>
          </div>

          {/* Navbar Middle Right */}
          <div className="navbar_middle_right flex items-center gap-4">
            <button className="btn capitalize">
              <FaShoppingCart size="1.5rem" /> Cart <div className="badge badge-sm bg-[#029fae]">2</div>
            </button>
            <button className="btn capitalize">
              <FaHeart size="1.5rem" />
            </button>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <FaUser size="1.5rem" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link to="register">Account</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Bottom */}
      <div className="navbar_bottom flex items-center justify-center w-full mx-4 h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between w-full">
          {/* Categories + Nav Links */}
          <div className="navbar_bottom_left flex items-center gap-8">
            {/* Categories Dropdown (Visible on large screens) */}
            <div className="dropdown dropdown-start hidden md:block">
              <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize">
                <FaBars size="1.5rem" /> All Categories
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Milk</a></li>
                <li><a>Curd</a></li>
                <li><a>Ghee</a></li>
                <li><a>Paneer</a></li>
                <li><a>Butter</a></li>
              </ul>
            </div>

            {/* Navigation Links (Visible on large screens) */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/" className="text-sm text-[#029fae] font-inter font-medium capitalize hover:text-[#007580]">Home</NavLink>
              <NavLink to="/about" className="text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#007580]">About Us</NavLink>
              <NavLink to="/blog" className="text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#007580]">Blog</NavLink>
              <NavLink to="/contact" className="text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#007580]">Contact</NavLink>
            </nav>
          </div>

          {/* Login/Register Buttons */}
          <div className="navbar_bottom_right flex items-center gap-4 ml-4 mr-6">
            <Link to="/auth/login" className="px-4 py-2 text-sm text-[#007580] border border-[#007580] rounded-lg hover:bg-[#007580] hover:text-white transition-all duration-300">
              Login
            </Link>
            <Link to="/auth/register" className="px-4 py-2 text-sm bg-[#007580] text-white rounded-lg hover:bg-[#029fae] transition-all duration-300">
              Register
            </Link>
          </div>

          {/* Hamburger Icon (Visible on mobile) */}
          <div className="md:hidden flex items-center mr-12">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is open) */}
      {menuOpen && (
        <div ref={menuRef} className="absolute top-[75px] left-0 w-full bg-white shadow-md z-50 px-6 py-4 md:hidden flex flex-col gap-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-sm text-[#029fae] font-medium">Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-sm text-[#636270] font-medium">About Us</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="text-sm text-[#636270] font-medium">Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-sm text-[#636270] font-medium">Contact</NavLink>
          <Link to="/auth/login" onClick={() => setMenuOpen(false)} className="text-sm text-[#007580] border border-[#007580] px-4 py-2 rounded">Login</Link>
          <Link to="/auth/register" onClick={() => setMenuOpen(false)} className="text-sm bg-[#007580] text-white px-4 py-2 rounded">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
