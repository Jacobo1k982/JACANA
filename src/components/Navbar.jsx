// Navbar.jsx - Versión Elegante & Premium
import React, { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { selectCartItems, selectTotalQTY } from '../app/CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import navLinks from '../data/NavLinks';
import MegaMenu from './MegaMenu';
import products from '../data/products';
import LiveSearchResults from './LiveSearchResults';

const CartDrawer = lazy(() => import('./CartDrawer'));
const SearchBar = lazy(() => import('./SearchBar'));

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

  // Toggle funciones
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

  // Búsqueda en vivo
  const liveResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.model?.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => window.removeEventListener('scroll', onNavScroll);
  }, []);

  // Animaciones
  const backdropVariants = {
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-poppins font-medium ${navState
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 h-10 transition-transform hover:scale-105"
          >
            <img
              src="/CapaDark.png"
              alt="Logo claro"
              className="block dark:hidden h-full object-contain"
            />
            <img
              src="/CapaLight.png"
              alt="Logo oscuro"
              className="hidden dark:block h-full object-contain"
            />
          </Link>

          {/* MegaMenu - Solo en desktop */}
          <div className="hidden lg:block">
            <MegaMenu />
          </div>

          {/* Íconos de acción */}
          <ul className="flex items-center space-x-2 sm:space-x-4">
            {/* Búsqueda */}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
              <button
                onClick={toggleSearch}
                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center group relative"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Dropdown de búsqueda en vivo */}
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-full mt-2 right-0 w-80 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
                >
                  <form onSubmit={handleSearchSubmit} className="p-3 border-b border-gray-200 dark:border-gray-700">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Buscar productos..."
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                  </form>
                  <LiveSearchResults
                    results={liveResults}
                    isVisible={searchQuery.length > 0}
                    onResultClick={() => setShowSearch(false)}
                  />
                </motion.div>
              )}
            </motion.li>

            {/* Carrito */}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={toggleDrawer}
                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition relative flex items-center justify-center group"
                aria-label="Carrito"
              >
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform duration-200" />
                {totalQTY > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 text-[0.65rem] w-5 h-5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
                  >
                    {totalQTY}
                  </motion.span>
                )}
              </button>
            </motion.li>

            {/* WhatsApp (solo en desktop) */}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
              <a
                href="https://wa.me/50664541700"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition flex items-center justify-center group"
                aria-label="Contacto por WhatsApp"
              >
                <span className="relative">
                  <PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                </span>
              </a>
            </motion.li>

            {/* Menú móvil */}
            <motion.li whileHover={{ scale: 1.1 }} className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center"
                aria-label="Menú móvil"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </motion.li>
          </ul>
        </nav>
      </header>

      {/* Fullscreen Search (móvil) */}
      <AnimatePresence>
        {showSearch && !window.matchMedia('(min-width: 1024px)').matches && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setShowSearch(false)}
          >
            <Suspense fallback={<div className="text-white">Cargando...</div>}>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 w-11/12 max-w-lg mx-auto"
              >
                <SearchBar
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClose={() => setShowSearch(false)}
                  onSubmit={handleSearchSubmit}
                />
              </motion.div>
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <Suspense fallback={null}>
            <CartDrawer onClose={toggleDrawer} items={cartItems} />
          </Suspense>
        )}
      </AnimatePresence>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900/95 via-gray-900/95 to-purple-900/95 backdrop-blur-2xl text-white flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-extrabold"
              >
                Menú
              </motion.h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-300 transition"
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="flex justify-between items-center bg-white/15 backdrop-blur-md rounded-xl p-4 hover:bg-white/25 transition-all cursor-pointer"
                >
                  <span className="text-lg font-semibold">{link.name}</span>
                  {link.image && (
                    <img
                      src={link.image}
                      alt={link.name}
                      className="w-16 h-12 object-cover rounded-lg shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;