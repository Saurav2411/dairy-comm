import { FaShoppingCart, FaHeart, FaUser, FaInfoCircle, FaSearch, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
            <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
              Gokul Dairy
            </Link>
          </div>

          {/* Search Box */}
          <div className="search_box">
            <form action="#" className="max-w-[443px] h-[44px] relative">
              <input type="text" placeholder="Search dairy products..." className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4" />
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
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Bottom */}
      <div className="navbar_bottom flex items-center justify-center w-full mx-4 h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between">
          {/* Categories Dropdown */}
          <div className="navbar_bottom_left flex items-center gap-8">
            <div className="dropdown dropdown-start">
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

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <NavLink to="/" className="text-sm text-[#029fae] font-inter font-medium capitalize">Home</NavLink>
              <NavLink to="/shop" className="text-sm text-[#636270] font-inter font-medium capitalize">Shop</NavLink>
              <NavLink to="/about" className="text-sm text-[#636270] font-inter font-medium capitalize">About Us</NavLink>
              <NavLink to="/blog" className="text-sm text-[#636270] font-inter font-medium capitalize">Blog</NavLink>
              <NavLink to="/contact" className="text-sm text-[#636270] font-inter font-medium capitalize">Contact</NavLink>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="navbar_bottom_right">
            <p className="text-sm text-[#636270] font-inter font-normal capitalize">
              Contact: <span className="text-[#272343]">(808) 555-0111</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
