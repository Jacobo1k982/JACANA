// Navbar.jsx
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { selectCartItems, selectTotalQTY } from '../app/CartSlice';
import { Link, useNavigate } from 'react-router-dom';

const CartDrawer = lazy(() => import('./CartDrawer'));
const SearchBar = lazy(() => import('./SearchBar'));

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins ${navState ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 
      ${navState ? 'w-12 drop-shadow-md' : 'w-16 drop-shadow-lg'}`}
            />
          </Link>
          <ul className="flex items-center space-x-4 sm:space-x-6">
            <li>
              <button onClick={toggleSearch} className="relative flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 transition">
                <MagnifyingGlassIcon className={`w-6 h-6 transition-all duration-300 ${navState ? 'text-gray-800' : 'text-white'}`} />
              </button>
            </li>

            <li>
              <button className="relative flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 transition">
                <HeartIcon className={`w-6 h-6 transition-all duration-300 ${navState ? 'text-gray-800' : 'text-white'}`} />
              </button>
            </li>

            <li>
              <button onClick={toggleDrawer} className="relative flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 transition">
                <ShoppingBagIcon className={`w-6 h-6 transition-all duration-300 ${navState ? 'text-gray-800' : 'text-white'}`} />
                {totalQTY > 0 && (
                  <span className="absolute -top-1 -right-1 text-[0.65rem] w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                    {totalQTY}
                  </span>
                )}
              </button>
            </li>
          </ul>

        </nav>

        {/* SearchBar */}
        <AnimatePresence>
          {showSearch && (
            <Suspense fallback={<div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">Cargando búsqueda...</div>}>
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                onClose={() => setShowSearch(false)}
                onSubmit={handleSearchSubmit}
              />
            </Suspense>
          )}
        </AnimatePresence>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <Suspense fallback={<div className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-white shadow-lg z-[999] flex items-center justify-center">Cargando...</div>}>
            <CartDrawer onClose={toggleDrawer} items={cartItems} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
