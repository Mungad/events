import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative z-50 w-full">
      <nav
        className="sticky top-0 flex items-center justify-between bg-black px-6 py-4 text-white shadow-md"
        style={{ minHeight: '4rem' }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          myticket
        </Link>

        {/* Center Links */}
        <ul className="mx-auto hidden gap-6 font-medium uppercase md:flex">
          <li>
            <Link to="/about" className="hover:text-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-orange-400">
              Events
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-orange-400">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="space-y-3 bg-black px-6 py-4 text-white md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium uppercase">
            <li>
              <Link to="/about" onClick={closeMenu} className="hover:text-orange-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={closeMenu} className="hover:text-orange-400">
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenu} className="hover:text-orange-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;