import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "bg-slate-700 rounded-lg p-1";

  //sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to="/sign-in"
            onClick={() => handleSignOut()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Iniciar sesión
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-gray-400 text-sm">Bienvenid@ Adrian German</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mis pedidos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mi cuenta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              onClick={() => handleSignOut()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cerrar sesión
            </NavLink>
          </li>
          <li className="flex items-center">
            <ShoppingCartIcon
              onClick={context.openCheckoutSideMenu}
              className="h-6 w-6 cursor-pointer text-gray-300"
            />
            <div>{context.cartProducts.length}</div>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-black-font-divs rounded-b-2xl">
      <ul className="flex items-center gap-3 text-base">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("shoes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("muebleria")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furniture")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Muebles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("estuches")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Otros
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3 text-base">{renderView()}</ul>
    </nav>
  );
};

export default Navbar;
