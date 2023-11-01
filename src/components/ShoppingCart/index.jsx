import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  //   const openCheckoutSideMenu = () => {
  //     context.openCheckout();
  //     context.closeProductDetail();
  //   };

  return (
    <div className="relative flex gap-0.5 items-center" onClick={context.openCheckoutSideMenu}>
      <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-gray-300" />
      <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-gray-300 w-4 h-4 text-xs text-black">
        {context.cartProducts.length}
      </div>
    </div>
  );
};

export default ShoppingCart;
