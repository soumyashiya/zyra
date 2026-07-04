import { useState } from 'react'

/* ---------- footer icons ---------- */
const DiamondIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
  </svg>
)
const IgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
  </svg>
)
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const FbIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V13h2.7v8z" />
  </svg>
)
const YtIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9.5v5l4-2.5z" fill="currentColor" />
  </svg>
)
const ArrowSm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

/* ---------- newsletter form ---------- */
function Newsletter() {
  const [sent, setSent] = useState(false)
  if (sent) {
    return (
      <p className="auto-news__ok">
        Thank you! Your submission has been received!
      </p>
    )
  }
  return (
    <form
      className="auto-news"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="auto-news__row">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="auto-news__input"
        />
        <button type="submit" className="auto-news__btn" aria-label="Subscribe">
          <ArrowSm />
        </button>
      </div>
    </form>
  )
}

/* ---------- Footer ---------- */
function AutoFooter() {
  return (
    <footer className="auto-footer">
      <div className="auto-footer__inner">
        <div className="auto-footer__top">
          <div className="auto-footer__brand" data-rev>
            <span className="auto-footer__logo">
              <DiamondIcon />
              SATTVARA
            </span>
            <p className="auto-footer__tag">
              A space to move, breathe, and grow — yoga that meets you exactly
              where you are.
            </p>
            <div className="auto-footer__socials">
              <a href="#instagram" aria-label="Instagram"><IgIcon /></a>
              <a href="#x" aria-label="X"><XIcon /></a>
              <a href="#facebook" aria-label="Facebook"><FbIcon /></a>
              <a href="#youtube" aria-label="YouTube"><YtIcon /></a>
            </div>
          </div>

          <nav className="auto-footer__col" data-rev style={{ '--rev-d': '80ms' }}>
            <h4>Multi-Pages</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#workshops">Workshops &amp; Events</a></li>
            </ul>
          </nav>

          <nav className="auto-footer__col" data-rev style={{ '--rev-d': '140ms' }}>
            <h4>More Pages</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#legal">Legal</a></li>
              <li><a href="#404">404</a></li>
            </ul>
          </nav>

          <div className="auto-footer__news-block" data-rev style={{ '--rev-d': '200ms' }}>
            <h4>Subscribe to our newsletter</h4>
            <Newsletter />
          </div>
        </div>

        <div className="auto-footer__bottom">
          <span>© 2026 Sattvara - YOGA &amp; Wellness Template</span>
          <div className="auto-footer__utility">
            <a href="#style-guide">Style Guide</a>
            <a href="#changelog">Changelog</a>
            <a href="#licenses">Licenses</a>
            <a href="#instructions">Instructions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AutoFooter
