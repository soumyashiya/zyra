import { useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import SiteFooter from '../components/SiteFooter'
import './Cart.css'

const fmt = (n) => `$${Number(n || 0).toFixed(2)}`

function OrderConfirmation() {
  const location = useLocation()
  const navigate = useNavigate()

  const order = useMemo(() => {
    if (location.state && location.state.order) return location.state.order
    try {
      const raw = sessionStorage.getItem('zl:lastOrder')
      if (raw) return JSON.parse(raw)
    } catch { /* storage disabled */ }
    return null
  }, [location.state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!order) {
    return (
      <div className="zl-shop-page">
        <div className="zl-shop-page__inner">
          <div className="zl-confirm">
            <h1 className="zl-confirm__title">No recent order</h1>
            <p className="zl-confirm__lead">
              We couldn&apos;t find a recent order in this session. Head back to the shop to place one.
            </p>
            <div className="zl-confirm__actions">
              <Link to="/services" className="zl-btn-solid">Browse products</Link>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    )
  }

  const firstName = order.customer?.name?.split(' ')[0] || 'researcher'
  const itemCount = order.items.reduce((n, it) => n + it.qty, 0)

  const continueShopping = () => {
    try { sessionStorage.removeItem('zl:lastOrder') } catch { /* ignore */ }
    navigate('/services')
  }

  return (
    <div className="zl-shop-page">
      <div className="zl-shop-page__inner">
        <div className="zl-confirm">
          <div className="zl-confirm__check" aria-hidden="true">
            <Check size={28} strokeWidth={2.4} />
          </div>
          <h1 className="zl-confirm__title">Order placed</h1>
          <p className="zl-confirm__lead">
            Thanks {firstName} — we&apos;ve received your order. A confirmation
            will be sent to{' '}
            <strong style={{ color: '#0E0E0E' }}>{order.customer?.email || 'your inbox'}</strong>.
          </p>

          <dl className="zl-confirm__meta">
            <div className="zl-confirm__meta-row">
              <dt>Order #</dt>
              <dd>{order.id}</dd>
            </div>
            <div className="zl-confirm__meta-row">
              <dt>Items</dt>
              <dd>{itemCount}</dd>
            </div>
            <div className="zl-confirm__meta-row zl-confirm__meta-row--total">
              <dt>Total paid</dt>
              <dd>{fmt(order.total)}</dd>
            </div>
          </dl>

          <div className="zl-confirm__actions">
            <button type="button" className="zl-btn-solid" onClick={continueShopping}>
              Continue shopping
            </button>
            <Link to="/" className="zl-btn-ghost">Back to home</Link>
          </div>
          <p className="zl-confirm__note">For laboratory R&amp;D use only</p>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

export default OrderConfirmation
