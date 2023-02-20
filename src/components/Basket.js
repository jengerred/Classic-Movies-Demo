import React from 'react';
import Payment from './Payment';
import Billing from './Billing';


 function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  return (
   <>
<div className="checkout" id="checkout">
    <h1 className="checkout-title">Checkout</h1>

        <div className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <div>
        {cartItems.length === 0 && <div className="empty">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
           <div className="col-2">
              <button className="btn-remove" onClick={() => onRemove(item)}>
                -
              </button>{' '}
              <button className="btn-add" onClick={() => onAdd(item)}>
                +
              </button>
            </div>

            <div className="col-2">
              {item.qty} x ${item.price.toFixed(2)}
         </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
           <section className="billing">
              <h1 className="payment-title">Billing</h1>
              <Billing></Billing>
              </section>
              <section className="payment" id="payment">
<h1 className="payment-title">Payment</h1>
    <Payment></Payment>
</section>
            <div className="row">
              <button className="cart-btn" onClick={() => alert('Sorry this page is only a demo!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
   </div>
   </div>
   </> 
  );
}

export default Basket;