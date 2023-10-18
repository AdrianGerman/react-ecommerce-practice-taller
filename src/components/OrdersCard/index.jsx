import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-purple-900 rounded-lg p-4 w-80 bg-black-font-divs shadow-2xl">
      <p className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light flex items-center justify-center">
            <CalendarDaysIcon className="h-4 w-4 mr-2 " />
            01.02.2023
          </span>
          <span className="font-light flex items-center justify-center">
            <ShoppingBagIcon className="h-4 w-4 mx-2" />
            {totalProducts} productos
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </div>
      </p>
    </div>
  );
};

export default OrdersCard;
