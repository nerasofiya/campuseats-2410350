import { Link } from "react-router";
import { useCart } from "../hooks/useCart.js";

function OrdersPage() {
  const { orders = [] } = useCart();

  if (orders.length === 0) {
    return (
      <section>
        <h2 className="section-title">My orders</h2>
        <p className="muted">
          No orders yet. <Link to="/">Browse vendors</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="order-list">
        {orders.map((order, index) => (
          <li key={order.id || index} className="card">
            <p className="cart-name">
              Pickup {order.pickupTime} · Mahallah {order.mahallah}
            </p>
            <p className="muted">
              {(order.lines || []).map((l, index, arr) => (
                <span key={l.item?.id || index}>
                  {l.qty}× {l.item.name}
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="price">RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrdersPage;
