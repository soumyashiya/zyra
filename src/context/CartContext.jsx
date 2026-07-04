import { useMemo, useState } from 'react'
import { CartContext, priceToNumber } from './cart-context'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (product, qtyArg) => {
    const addQty = Math.max(1, Number(qtyArg ?? product.qty ?? 1) || 1)
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id)
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + addQty } : it,
        )
      }
      const { qty: _omit, ...rest } = product
      return [...prev, { ...rest, qty: addQty }]
    })
  }

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter((it) => it.id !== id))

  const updateQty = (id, qty) =>
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, qty) } : it))
        .filter((it) => it.qty > 0),
    )

  const clearCart = () => setItems([])

  const count = useMemo(
    () => items.reduce((n, it) => n + it.qty, 0),
    [items],
  )

  const subtotal = useMemo(
    () =>
      items.reduce((sum, it) => sum + priceToNumber(it.price) * it.qty, 0),
    [items],
  )

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    count,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
