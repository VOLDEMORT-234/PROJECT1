import { Fragment, useContext, useState } from "react";

import Checkout from "./Checkout";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [isCheckout, setisCheckout] = useState(false);

  const [sumbitting, setsubmitting] = useState(false);
  const [didsumbitting, setdidsubmitting] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (userdata) => {
    setsubmitting(true);
    const response = await fetch(
      "https://deepesh-agrawal-default-rtdb.firebaseio.com/meals.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setsubmitting(false);
    setdidsubmitting(true);
  };

  const orderHandle = () => {
    setisCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModal = (
    <Fragment>
      {" "}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      <div className={classes.actions}>
        {!isCheckout && (
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        )}
        {hasItems && !isCheckout && (
          <button className={classes.button} onClick={orderHandle}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );

  const isSubmittingmodel = <p>Sending order data..</p>;
  const didsubmitmodel = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!sumbitting && !didsumbitting && cartModal}
      {sumbitting && isSubmittingmodel}
      {!sumbitting && didsumbitting && didsubmitmodel}
    </Modal>
  );
};

export default Cart;
