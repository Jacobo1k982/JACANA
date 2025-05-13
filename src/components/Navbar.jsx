import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { selectCartItems, selectTotalQTY } from '../app/CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import navLinks from '../data/NavLinks';

const CartDrawer = lazy(() => import('./CartDrawer'));
const SearchBar = lazy(() => import('./SearchBar'));

const MobileMenuItem = ({ link, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-white text-2xl font-semibold tracking-wide hover:text-blue-400 transition-colors duration-300"
      >
        {link.path !== '#' ? (
          <Link to={link.path} onClick={onClose}>
            {link.name}
          </Link>
        ) : (
          <span>{link.name}</span>
        )}
        {link.subLinks && (
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 90 : 0 }}
            className="ml-2"
          >
            ▶
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {open && link.subLinks && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-4 mt-2 space-y-2 border-l border-blue-400 pl-4"
          >
            {link.subLinks.map((subLink) => (
              <MobileMenuItem key={subLink.name} link={subLink} onClose={onClose} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const cartItems = useSelector(selectCartItems);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const onNavScroll = () => setNavState(window.scrollY > 30);

  const toggleSearch = () => setShowSearch(!showSearch);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => window.removeEventListener('scroll', onNavScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins ${navState
          ? 'bg-white/70 backdrop-blur-md shadow-md py-3' // <--- Cambiado aquí
          : 'bg-white py-3'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 ${navState ? 'w-12 drop-shadow-md' : 'w-16 drop-shadow-lg'}`}
            />
          </Link>

          <ul className="flex items-center space-x-4 sm:space-x-6">
            <li>
              <button onClick={toggleSearch} className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-800 transition-all duration-300" />
              </button>
            </li>

            <li>
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
                <HeartIcon className="w-6 h-6 text-gray-800 transition-all duration-300" />
              </button>
            </li>

            <li>
              <button onClick={toggleDrawer} className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
                <ShoppingBagIcon className="w-6 h-6 text-gray-800 transition-all duration-300" />
                {totalQTY > 0 && (
                  <span className="absolute -top-1 -right-1 text-[0.65rem] w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                    {totalQTY}
                  </span>
                )}
              </button>
            </li>

            <li>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-800" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* SearchBar */}
        <AnimatePresence>
          {showSearch && (
            <Suspense fallback={<div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">Cargando búsqueda...</div>}>
              <SearchBar value={searchQuery} onChange={handleSearchChange} onClose={() => setShowSearch(false)} onSubmit={handleSearchSubmit} />
            </Suspense>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <Suspense fallback={<div className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-white shadow-lg z-[999] flex items-center justify-center">Cargando...</div>}>
            <CartDrawer onClose={toggleDrawer} items={cartItems} />
          </Suspense>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur-lg shadow-2xl z-50 flex flex-col items-center justify-center px-8"
          >
            <ul className="space-y-6 text-center w-full">
              {navLinks.map((link) => (
                <MobileMenuItem key={link.name} link={link} onClose={() => setMobileMenuOpen(false)} />
              ))}
            </ul>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;