import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col min-h-screen bg-[#f9f9f9]">
      {/* Footer Top */}
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Logo & Description */}
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <div className="logo_wrapper mb-7">
                <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
                  <FaMoneyBillAlt size="2rem" color="#029fae" /> Gokul Dairy
                </Link>
              </div>
              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                Offering the finest, freshest dairy products directly to your doorstep. Enjoy our wide range of milk, curd, ghee, and more!
              </p>
              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px] hover:bg-[#007580] hover:text-white transition-all duration-300">
                  <FaFacebookF size="1.5rem" />
                </Link>
                <Link className="p-3 inline-block hover:bg-[#007580] hover:text-white transition-all duration-300">
                  <FaTwitter size="1.5rem" />
                </Link>
                <Link className="p-3 inline-block hover:bg-[#007580] hover:text-white transition-all duration-300">
                  <FaInstagram size="1.5rem" />
                </Link>
                <Link className="p-3 inline-block hover:bg-[#007580] hover:text-white transition-all duration-300">
                  <FaYoutube size="1.5rem" />
                </Link>
              </div>
            </div>

            {/* Product Categories */}
            <div className="footer_wrapper animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Categories</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Milk</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Curd</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Ghee</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Paneer</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Butter</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Ice Cream</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer_wrapper animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Support</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Help & Support</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Terms & Conditions</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Privacy Policy</Link></li>
                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae]">Returns</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="newsletter animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Subscribe for Updates</h3>
              <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                <input type="email" placeholder="Your Email.." className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2" />
                <button type="submit" className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer hover:bg-[#029fae] transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer_bottom w-full h-[75px] flex items-center justify-center mt-auto bg-[#fff] shadow-md">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#9a9caa] font-normal font-inter">
                @ 2025 Gokul Dairy - Designed & Developed by <span className="text-[#272343]">Saurav Chauhan</span>
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <p className="flex items-center gap-2 text-[#9a9caa] text-xl hover:text-[#007580] transition-all duration-300">Bank Note <FaMoneyBillAlt size="2rem" /></p>
              <p className="flex items-center gap-2 text-[#9a9caa] text-xl hover:text-[#007580] transition-all duration-300">Credit Card <FaCreditCard size="2rem" /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
