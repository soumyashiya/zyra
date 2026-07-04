import { Link } from 'react-router-dom'
import './Footer.css'

const categories = [
  { to: '/automotive', label: 'Automotive' },
  { to: '/business', label: 'Business' },
  { to: '/consumer', label: 'Consumer' },
  { to: '/deals', label: 'Deals' },
  { to: '/family', label: 'Family' },
  { to: '/industrial', label: 'Industrial' },
]

const company = ['About', 'Careers', 'Press', 'Contact']
const social = ['Twitter', 'Instagram', 'LinkedIn', 'YouTube']

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="footer__logo">Z</span>
            <span className="footer__name">Zyra Labs</span>
          </Link>
          <p className="footer__tagline">
            Research-grade peptides & supplements, formulated for consistency.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Categories</h4>
          <ul className="footer__list">
            {categories.map((c) => (
              <li key={c.to}>
                <Link to={c.to}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            {company.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Follow</h4>
          <ul className="footer__list">
            {social.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 Zyra Labs. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
