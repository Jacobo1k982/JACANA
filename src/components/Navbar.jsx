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
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins ${navState ? 'bg-white/80 dark:bg-[#000000]/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-5'}`}>
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 h-8">
            <img src="/CapaDark.png" alt="Logo claro" className="block dark:hidden h-full object-contain" />
            <img src="/CapaLight.png" alt="Logo oscuro" className="hidden dark:block h-full object-contain" />
          </Link>

          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button className="text-gray-800 dark:text-white hover:text-blue-500 font-semibold uppercase text-sm">
                  {link.name}
                </button>

                {dropdownOpen === link.name && link.subcategories && (
                  <div className="absolute top-14 left-0 grid grid-cols-2 gap-2 w-[600px] bg-white shadow-xl z-50 border rounded overflow-hidden p-4">
                    {link.subcategories.map((sub) => (
                      <div key={sub.name} className="group relative hover:bg-gray-100 transition rounded">
                        <Link
                          to={sub.path}
                          onClick={() => setDropdownOpen(null)}
                          className="flex flex-col space-y-2 items-start p-2 h-full"
                        >
                          <span className="text-gray-700 text-sm font-semibold uppercase">{sub.name}</span>
                          <img src={sub.image} alt={sub.name} className="w-full h-24 object-cover rounded-lg" />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ul className="flex items-center space-x-0 sm:space-x-6">
            <li>
              <button onClick={toggleSearch} className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#000000] transition flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </li>
            <li>
              <button onClick={toggleDrawer} className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#000000] transition relative flex items-center justify-center">
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                {totalQTY > 0 && (
                  <span className="absolute -top-1 -right-1 text-[0.65rem] w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                    {totalQTY}
                  </span>
                )}
              </button>
            </li>
            <li className="block lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#000000] transition flex items-center justify-center">
                {mobileMenuOpen ? <XMarkIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" /> : <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {showSearch && (
          <Suspense fallback={<div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">Cargando búsqueda...</div>}>
            <SearchBar value={searchQuery} onChange={handleSearchChange} onClose={() => setShowSearch(false)} onSubmit={handleSearchSubmit} />
          </Suspense>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {drawerOpen && (
          <Suspense fallback={<div className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-white shadow-lg z-[999] flex items-center justify-center">Cargando...</div>}>
            <CartDrawer onClose={toggleDrawer} items={cartItems} />
          </Suspense>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="fixed top-0 left-0 w-full h-full bg-[#000000]/95 backdrop-blur-lg shadow-2xl z-50 flex flex-col px-6 pt-10 overflow-y-auto">
            {selectedSubcategory ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <button onClick={() => setSelectedSubcategory(null)} className="text-white hover:text-blue-400 transition">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h2 className="text-white text-3xl font-extrabold">{selectedSubcategory.name}</h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-red-400 transition">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {selectedSubcategory.children.map((child) => (
                    <Link
                      to={child.path}
                      key={child.name}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center bg-white/90 rounded-lg overflow-hidden hover:bg-white transition"
                    >
                      <div className="px-4 py-3 text-sm font-semibold text-gray-900">{child.name}</div>
                      <img src={child.image} alt={child.name} className="w-24 h-16 object-cover" />
                    </Link>
                  ))}
                </div>
              </>
            ) : selectedCategory ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <button onClick={() => setSelectedCategory(null)} className="text-white hover:text-blue-400 transition">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h2 className="text-white text-3xl font-extrabold">{selectedCategory.name}</h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-red-400 transition">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {selectedCategory.subcategories.map((sub) => (
                    <div
                      key={sub.name}
                      onClick={() => {
                        if (sub.children) {
                          setSelectedSubcategory(sub);
                        } else {
                          navigate(sub.path);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex justify-between items-center bg-white/90 rounded-lg overflow-hidden hover:bg-white transition cursor-pointer"
                    >
                      <div className="px-4 py-3 text-sm font-semibold text-gray-900">{sub.name}</div>
                      <img src={sub.image} alt={sub.name} className="w-24 h-16 object-cover" />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 w-full mb-10">
                  {navLinks.map((link) => (
                    <div
                      key={link.name}
                      className="flex justify-between items-center bg-white/90 rounded-lg overflow-hidden hover:bg-white transition cursor-pointer"
                      onClick={() => {
                        if (link.subcategories) {
                          setSelectedCategory(link);
                        } else {
                          navigate(link.path);
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="px-4 py-3 text-sm font-semibold text-gray-900">{link.name}</div>
                      {link.image && <img src={link.image} alt={link.name} className="w-24 h-16 object-cover" />}
                    </div>
                  ))}
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-white hover:text-red-400 transition">
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;