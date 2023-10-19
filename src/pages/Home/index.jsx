import { useContext } from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1 className="font-medium text-xl">Productos exclusivos</h1>
      </div>
      <div className="flex items-center justify-center p-4 ">
        <MagnifyingGlassIcon className="h-6 w-6 mb-4 mr-2" />
        <input
          type="text"
          placeholder="Busca un producto"
          className="rounded-lg border border-slate-400 w-80 p-4 mb-4 bg-black-font focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
