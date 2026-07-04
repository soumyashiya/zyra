import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useCart, priceToNumber } from '../context/cart-context'
import './Cart.css'

const fmt = (n) => `$${n.toFixed(2)}`

function Cart() {
  const { items, updateQty, removeFromCart, clearCart, count, subtotal } = useCart()
  const navigate = useNavigate()

  const goCheckout = () => {
    if (items.length === 0) return
    navigate('/checkout')
  }

  return (
    <div className="zl-shop-page">
      <div className="zl-shop-page__inner">
        <div className="zl-shop-page__head">
          <div>
            <p className="zl-eyebrow">Your Cart</p>
            <h1 className="zl-shop-page__title">
              {items.length ? `${count} ${count === 1 ? 'item' : 'items'}` : 'Cart is empty'}
            </h1>
          </div>
          <Link to="/services" className="zl-shop-page__back">← Back to Shop</Link>
        </div>

        {items.length === 0 ? (
          <div className="zl-cart-empty">
            <div className="zl-cart-empty__icon" aria-hidden="true">
              <ShoppingCart size={22} strokeWidth={1.6} />
            </div>
            <p className="zl-cart-empty__title">No research products yet</p>
            <p className="zl-cart-empty__sub">
              Explore our catalogue and add a compound to get started.
            </p>
            <Link to="/services" className="zl-btn-solid">Continue shopping</Link>
          </div>
        ) : (
          <div className="zl-shop-grid">
            <ul className="zl-cart-list">
              {items.map((it) => (
                <li className="zl-cart-item" key={it.id}>
                  <Link to={`/product/${it.id}`} className="zl-cart-item__media">
                    <img src={it.image} alt={it.name} />
                  </Link>
                  <div className="zl-cart-item__info">
                    <div>
                      <p className="zl-cart-item__cat">{it.subtitle || 'Research peptide'}</p>
                      <Link to={`/product/${it.id}`} className="zl-cart-item__name">{it.name}</Link>
                      <p className="zl-cart-item__unit">{it.price} each</p>
                    </div>
                    <div className="zl-cart-item__ctl">
                      <div className="zl-qty">
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="zl-cart-item__line">
                        {fmt(priceToNumber(it.price) * it.qty)}
                      </p>
                      <button
                        type="button"
                        className="zl-cart-item__remove"
                        onClick={() => removeFromCart(it.id)}
                        aria-label={`Remove ${it.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              <div className="zl-cart-list__foot">
                <button type="button" className="zl-cart-list__clear" onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </ul>

            <aside className="zl-summary">
              <h2 className="zl-summary__title">Order summary</h2>
              <dl className="zl-summary__rows">
                <div>
                  <dt>Subtotal</dt>
                  <dd>{fmt(subtotal)}</dd>
                </div>
                <div>
                  <dt>Tracked shipping</dt>
                  <dd>Free</dd>
                </div>
                <div className="zl-summary__divider" aria-hidden="true" />
                <div className="zl-summary__total">
                  <dt>Total</dt>
                  <dd>{fmt(subtotal)}</dd>
                </div>
              </dl>
              <button type="button" className="zl-btn-solid zl-summary__cta" onClick={goCheckout}>
                Checkout
              </button>
              <Link to="/services" className="zl-summary__continue">Continue shopping</Link>
              <p className="zl-summary__note">
                For laboratory R&amp;D use only · Not for human or veterinary consumption
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
