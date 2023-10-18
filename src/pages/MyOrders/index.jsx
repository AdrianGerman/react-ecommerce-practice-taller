import { useContext } from "react";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="flex w-80 items-center relative justify-center mb-6">
          <Link to="/my-order" className="absolute right-0">
            <ChevronRightIcon className="h-6 w-6 text-white cursor-pointer" />
          </Link>
          <h1 className="font-medium text-xl">My Orders</h1>
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
