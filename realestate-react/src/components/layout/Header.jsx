import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { smoothScrollTo } from '../../utils/smoothScroll';

const Header = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const headerRef = useHeaderScroll();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId, closeMenu);
  };

  return (
    <header ref={headerRef} className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero-comp" 
            onClick={(e) => handleNavClick(e, '#hero-comp')}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-xl transform -rotate-45">T</span>
            </div>
            <span className="text-gray-900 font-bold text-xl">TechReal</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-gray-700 hover:text-cyan-600 transition font-medium"
            >
              About
            </a>
            <a 
              href="#ventures" 
              onClick={(e) => handleNavClick(e, '#ventures')}
              className="text-gray-700 hover:text-cyan-600 transition font-medium"
            >
              Properties
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-gray-700 hover:text-cyan-600 transition font-medium"
            >
              Contact
            </a>
            <a 
              href="tel:+917441143143" 
              className="bg-gradient-to-r from-gray-200 border-2 border-gray-400 to-gray-200 hover:from-gray-600 hover:to-gray-700 hover:text-white text-gray-500 px-6 py-2.5 rounded-xl font-semibold transition"
            >
              Make a Call
            </a>
          </div>
          
          <button 
            id="mobileMenuBtn"
            onClick={toggleMenu}
            className="md:hidden text-gray-900"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <div 
          id="mobileMenu" 
          className={`${isOpen ? '' : 'hidden'} md:hidden mt-4 pb-4 space-y-2`}
        >
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="block text-gray-700 py-2 hover:text-cyan-600 font-medium"
          >
            About
          </a>
          <a 
            href="#ventures" 
            onClick={(e) => handleNavClick(e, '#ventures')}
            className="block text-gray-700 py-2 hover:text-cyan-600 font-medium"
          >
            Properties
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block text-gray-700 py-2 hover:text-cyan-600 font-medium"
          >
            Contact
          </a>
          <a 
            href="tel:+917441143143" 
            className="block bg-gradient-to-r from-gray-200 border-2 border-gray-400 to-gray-200 hover:from-gray-600 hover:to-gray-700 hover:text-white text-gray-500 px-4 py-2.5 rounded-xl mt-2 text-center font-semibold"
          >
            Make a Call
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
