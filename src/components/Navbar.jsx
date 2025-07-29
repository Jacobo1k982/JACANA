// Navbar.jsx - Versión Premium 🚀
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { selectCartItems, selectTotalQTY } from '../app/CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import navLinks from '../data/NavLinks';

const CartDrawer = lazy(() => import('./CartDrawer'));
const SearchBar = lazy(() => import('./SearchBar'));

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedChildSubcategory, setSelectedChildSubcategory] = useState(null);

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

  // Animaciones
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-poppins font-medium ${navState
            ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg py-3'
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

          {/* Menú Desktop con hover elegante */}
          <ul className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold uppercase text-sm tracking-wide transition-colors duration-200 relative"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{ display: dropdownOpen === link.name ? 'none' : 'block' }}
                  />
                </motion.button>

                {/* Dropdown con grid animado */}
                <AnimatePresence>
                  {dropdownOpen === link.name && link.subcategories && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-12 left-0 w-[680px] grid grid-cols-2 gap-3 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 p-5"
                    >
                      {link.subcategories.map((sub, idx) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                          onClick={() => {
                            navigate(sub.path);
                            setDropdownOpen(null);
                          }}
                        >
                          <div className="relative">
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <span className="block text-sm font-bold text-gray-800 dark:text-white mt-2 uppercase tracking-wide">
                            {sub.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Íconos de acción */}
          <ul className="flex items-center space-x-2 sm:space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={toggleSearch}
                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center group"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.li>

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
                    className="absolute -top-1 -right-1 text-[0.65rem] w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
                  >
                    {totalQTY}
                  </motion.span>
                )}
              </button>
            </motion.li>

            {/* Botón menú móvil */}
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

      {/* Fullscreen Search */}
      <AnimatePresence>
        {showSearch && (
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

      {/* Menú Móvil con efecto parallax y fondo desenfocado */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900/95 via-gray-900/95 to-purple-900/90 backdrop-blur-2xl text-white flex flex-col overflow-hidden"
          >
            {/* Cabecera del menú móvil */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-extrabold"
              >
                {selectedChildSubcategory
                  ? selectedChildSubcategory.name
                  : selectedSubcategory
                    ? selectedSubcategory.name
                    : selectedCategory
                      ? selectedCategory.name
                      : 'Menú'}
              </motion.h2>
              <div className="flex space-x-4">
                {!(selectedChildSubcategory || selectedSubcategory || selectedCategory) && (
                  <button
                    onClick={toggleDrawer}
                    className="hover:text-blue-300 transition"
                    aria-label="Carrito"
                  >
                    <ShoppingBagIcon className="w-6 h-6" />
                    {totalQTY > 0 && (
                      <span className="absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        {totalQTY}
                      </span>
                    )}
                  </button>
                )}
                <button
                  onClick={() => {
                    if (selectedChildSubcategory) {
                      setSelectedChildSubcategory(null);
                    } else if (selectedSubcategory) {
                      setSelectedSubcategory(null);
                    } else if (selectedCategory) {
                      setSelectedCategory(null);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="hover:text-red-300 transition"
                >
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Contenido del menú */}
            <div className="flex-1 p-6 overflow-y-auto">
              {selectedChildSubcategory ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {selectedChildSubcategory.children.map((child) => (
                    <Link
                      to={child.path}
                      key={child.name}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all"
                    >
                      <span className="text-lg font-semibold">{child.name}</span>
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-16 h-12 object-cover rounded-lg shadow-md"
                      />
                    </Link>
                  ))}
                </motion.div>
              ) : selectedSubcategory ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {selectedSubcategory.children.map((child) => (
                    <div
                      key={child.name}
                      onClick={() =>
                        child.children
                          ? setSelectedChildSubcategory(child)
                          : (navigate(child.path), setMobileMenuOpen(false))
                      }
                      className="flex justify-between items-center bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all cursor-pointer"
                    >
                      <span className="text-lg font-semibold">{child.name}</span>
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-16 h-12 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </motion.div>
              ) : selectedCategory ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {selectedCategory.subcategories.map((sub) => (
                    <div
                      key={sub.name}
                      onClick={() =>
                        sub.children
                          ? setSelectedSubcategory(sub)
                          : (navigate(sub.path), setMobileMenuOpen(false))
                      }
                      className="flex justify-between items-center bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all cursor-pointer"
                    >
                      <span className="text-lg font-semibold">{sub.name}</span>
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-16 h-12 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {navLinks.map((link) => (
                    <div
                      key={link.name}
                      onClick={() =>
                        link.subcategories
                          ? setSelectedCategory(link)
                          : (navigate(link.path), setMobileMenuOpen(false))
                      }
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
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;