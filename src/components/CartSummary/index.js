import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let sum = 0

      cartList.forEach(each => {
        sum += each.price * each.quantity
      })

      return (
        <div className="summary-card">
          <h1 className="order-h1">
            Order Total: <span className="rs-text">Rs {sum}/-</span>
          </h1>
          <p className="item-p">{cartList.length} Items in cart</p>
          <button className="order-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
