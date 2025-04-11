import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice';

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const onNavScroll = () => setNavState(window.scrollY > 30);

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
            <img src={logo} alt="logo" className={`w-12 h-auto transition-all duration-300 ${navState ? 'brightness-0' : ''}`} />
          </div>

          <ul className="flex items-center space-x-6">
            <li className="group relative">
              <MagnifyingGlassIcon className={`w-6 h-6 cursor-pointer transition-all duration-300 group-hover:text-indigo-600 ${navState ? 'text-gray-800' : 'text-white'}`} />
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
