import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X, User } from 'lucide-react'
import { useCart } from '../context/cart-context'
import './Header.css'

const navLinks = [
  { href: '#home', type: 'anchor', label: 'Home' },
  { to: '/about', type: 'route', label: 'About' },
  { to: '/services', type: 'route', label: 'Shop' },
  { href: '#why-us', type: 'anchor', label: 'Why Us' },
  { href: '#testimonials', type: 'anchor', label: 'Testimonial' },
  { to: '/contact', type: 'route', label: 'Contact' },
]

function Header() {
  const { count } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    const id = href.replace('#', '')
    setMenuOpen(false)
    // Cross-page anchor: navigate to landing with state; Deals handles the scroll.
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/', { state: { scrollTo: id } })
      return
    }
    // Same-page anchor: scroll immediately.
    const target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`header ${menuOpen ? 'is-menu-open' : ''}`}>
      <NavLink to="/" className="header__brand" aria-label="Zyra Labs — home">
        <span className="header__wordmark" aria-hidden="true">
          <span className="header__wordmark-cap">Z</span>
          <span className="header__wordmark-italic">y</span>
          <span className="header__wordmark-cap">R</span>
          <span className="header__wordmark-cap">A</span>
          <span className="header__wordmark-sub">labs</span>
        </span>
      </NavLink>

      <nav className="header__nav">
        {navLinks.map((link) => (
          link.type === 'route' ? (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          )
        ))}
      </nav>

      <div className="header__actions">
        <NavLink to="/signin" className="header__cart" aria-label="Sign in">
          <User size={18} strokeWidth={1.8} />
        </NavLink>
        <NavLink to="/cart" className="header__cart" aria-label={`Cart, ${count} items`}>
          <ShoppingBag size={18} strokeWidth={1.8} />
          {count > 0 && <span className="header__cart-count">{count}</span>}
        </NavLink>
        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="header-mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="header-mobile-menu"
        className={`header__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            link.type === 'route' ? (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            )
          ))}
          <NavLink
            to="/signin"
            className="header__mobile-link header__mobile-link--cart"
            onClick={() => setMenuOpen(false)}
          >
            <User size={18} /> Sign in
          </NavLink>
          <NavLink
            to="/cart"
            className="header__mobile-link header__mobile-link--cart"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingBag size={18} /> Cart {count > 0 ? `(${count})` : ''}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
