import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
        flex-col fixed top-20 right-0 border bg-[#242424] border-white rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi pedido</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
