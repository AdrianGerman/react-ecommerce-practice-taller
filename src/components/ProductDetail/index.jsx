import { XMarkIcon } from "@heroicons/react/24/solid";

const productDetail = () => {
  return (
    <aside className="flex flex-col fixed right-0 border bg-[#242424] border-white rounded-lg w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalles</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export default productDetail;
