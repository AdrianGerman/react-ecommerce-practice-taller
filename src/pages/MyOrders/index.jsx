import { useContext } from "react";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="flex w-80 items-center relative justify-center mb-6">
          <h1 className="font-medium text-xl">Mis pedidos</h1>
        </div>
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
}

export default MyOrders;
