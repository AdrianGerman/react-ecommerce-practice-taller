import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  // console.log(context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "19.10.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu();
    context.setSearchByTitle(null);
  };

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
      flex-col fixed border-l border-white top-20 right-0  bg-[#242424] w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi pedido</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 border-t">
        <p className="flex justify-between items-center ">
          <span className="font-light mt-3">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-slate-600 py-3 text-white rounded-lg my-6"
            onClick={() => handleCheckout()}
          >
            Realizar pedido
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
