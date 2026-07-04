import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Deals from './pages/Deals'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Signin from './pages/Signin'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import './App.css'

/* Reset scroll to the top on every route change, so each page
   opens at its hero instead of keeping the previous scroll position.
   Skips the reset when a route was entered with location.state.scrollTo,
   so the landing route can honor a cross-page anchor jump instead. */
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (state && state.scrollTo) return
    window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

/* Some routes (auth screens) intentionally render without the site chrome
   — no header, no default main padding — for a focused, distraction-free UI. */
const CHROMELESS_ROUTES = new Set(['/signin'])

function App() {
  const { pathname } = useLocation()
  const chromeless = CHROMELESS_ROUTES.has(pathname)

  return (
    <div className="app">
      <ScrollToTop />
      {!chromeless && <Header />}
      <main className={`main ${chromeless ? 'main--bare' : ''}`}>
        <Routes>
          <Route path="/" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Deals />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
