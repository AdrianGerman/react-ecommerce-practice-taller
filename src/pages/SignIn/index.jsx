import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context";

function SingIn() {
  const context = useContext(ShoppingCartContext);

  const handleLogIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
  };

  const [view, setView] = useState("user-info");

  //Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const renderLogIn = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Correo: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Contraseña: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            disabled={hasUserAnAccount}
            className="bg-slate-500 disabled:bg-slate-500/40 text-white w-full rounded-lg py-3 mt-4 mb-2 cursor-pointer"
            onClick={() => handleLogIn()}
          >
            Iniciar sesión
          </button>
        </Link>
        <div className="text-center">
          <a
            href="/"
            className="font-light text-xs underline underline-offset-4"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <button
          disabled={hasUserAnAccount}
          className="border border-bg-slate-500 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          onClick={() => setView("create-user-info")}
        >
          Registrarse
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    // TODO: Create render view
  };
  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Bienvenido!</h1>
      {renderView()}
    </Layout>
  );
}

export default SingIn;
