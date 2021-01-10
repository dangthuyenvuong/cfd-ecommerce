import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../actions/cartAction";
import CartItem from "./CartItem";



const portalCart = document.createElement('div');
portalCart.id = 'popup-cart'
document.body.append(portalCart)


const Cart = () => {
  const cart = useSelector((state: any) => state.cart)

  useEffect(() => {
    if (cart.open) {
      portalCart.classList.add('is-open')
    } else {
      portalCart.classList.remove('is-open')
    }
  }, [cart.open])

  const dispatch = useDispatch()


  return ReactDOM.createPortal(
    <div className="cart">
      <div className="cart--inner">
        <div className="cart--head">
          <h3 className="cart--title">Shopping cart</h3>
          <div className="cart--close" onClick={dispatch.bind(null, closeCart())}>
            Close
              <img src="/assets/icon-close.svg" alt="" />
          </div>
        </div>
        <div className="cart--body">
          {
            cart.list.map((e: any) => (
              <CartItem
                {...e}
              />
            ))
          }


        </div>
        <div className="cart--foot">
          <div className="subtotal">
            Subtotal
              <span>73.98 USD</span>
          </div>
          <div className="button">
            <div className="btn--apply">
              <span>Continue shopping</span>
            </div>
            <div className="btn btn-buy">
              <span>Go to Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalCart
  )
};



export default Cart;
