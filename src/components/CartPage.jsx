import CartItem from "./CartItem.jsx";
import CheckoutForm from "./CheckoutForm.jsx";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";

function CartPage() {
  const navigate = useNavigate();
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart();

  const handlePlaceOrder = (details) => {
    placeOrder(details);
    navigate("/orders");
  };

  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty. Pick something from a menu first.
      </p>
    );
  }

  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={changeQty}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>
      <CheckoutForm onPlaceOrder={handlePlaceOrder} />
    </div>
  );
}

export default CartPage;
