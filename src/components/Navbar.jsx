import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice';
import { Link, useNavigate  } from 'react-router-dom';


const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const onNavScroll = () => setNavState(window.scrollY > 30);

  const toggleSearch = () => setShowSearch(!showSearch);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins ${navState ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="logo"
                className={`w-12 h-auto transition-all duration-300 ${navState ? 'brightness-0' : ''}`}
              />
            </Link>
          </div>

          <ul className="flex items-center space-x-6">
            <li className="group relative">
              <button onClick={toggleSearch}>
                <MagnifyingGlassIcon
                  className={`w-6 h-6 cursor-pointer transition-all duration-300 group-hover:text-indigo-600 ${navState ? 'text-gray-800' : 'text-white'}`}
                />
              </button>
            </li>

            <li className="group relative">
              <HeartIcon className={`w-6 h-6 cursor-pointer transition-all duration-300 group-hover:text-pink-500 ${navState ? 'text-gray-800' : 'text-white'}`} />
            </li>
            <li className="relative">
              <button onClick={toggleDrawer} className="relative focus:outline-none">
                <ShoppingBagIcon className={`w-6 h-6 transition-all duration-300 hover:scale-110 ${navState ? 'text-gray-800' : 'text-white'}`} />
                {totalQTY > 0 && (
                  <span className="absolute -top-2 -right-2 text-[0.65rem] w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                    {totalQTY}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
        <AnimatePresence>
          {showSearch && (
            <motion.form
              onSubmit={handleSearchSubmit}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Buscar productos..."
                  className="w-full py-2 pl-4 pr-10 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <XMarkIcon
                  onClick={() => setShowSearch(false)}
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500"
                />
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </header>

      {/* DRAWER - CARRITO */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-white shadow-lg z-[999] px-4 py-6 flex flex-col"
            >
              <h2 className="text-xl font-bold mb-4">Carrito</h2>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
