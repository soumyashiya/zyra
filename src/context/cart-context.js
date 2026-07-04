import { createContext, useContext } from 'react'

export const CartContext = createContext(null)

/* Turn a price like "$52.00" into the number 52. */
export const priceToNumber = (p) =>
  typeof p === 'number' ? p : Number(String(p).replace(/[^0-9.]/g, '')) || 0

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
