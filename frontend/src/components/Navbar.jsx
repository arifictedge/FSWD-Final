import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <ShoppingBag size={24} />
          <span>ProductDB</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links Container */}
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            All Products
          </Link>
          
          <Link 
            to="/add-product" 
            className="btn-add"
            onClick={closeMenu}
          >
            Add Product
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: white;
          border-bottom: 1px solid var(--border);
          min-height: 70px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .btn-add {
          background: var(--text-main);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            gap: 0;
            padding: 0;
            border-bottom: 1px solid var(--border);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
          }

          .nav-links.show {
            max-height: 200px;
            padding: 1rem 0;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
          }

          .nav-link {
            width: 100%;
            padding: 1rem 1.5rem;
            text-align: center;
            border-bottom: 1px solid var(--bg-alt);
          }
          
          .btn-add {
            margin: 1rem 1.5rem;
            text-align: center;
            width: calc(100% - 3rem);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
