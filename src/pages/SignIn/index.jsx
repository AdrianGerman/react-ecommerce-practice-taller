import { Link, Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../context";

function SingIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    // Redirect
    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // Create account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);
    // Sign In
    handleSignIn();
  };

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
            className="bg-slate-500 disabled:bg-slate-500/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}
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
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Ingresa tu nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="bg-black-font rounded-lg border border-white placeholder:font-light 
            placeholder:text-sm placeholder:text-white/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Ingresa tu correo electronico:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="correo@correo.com"
            className="bg-black-font rounded-lg border border-white placeholder:font-light
            placeholder:text-sm placeholder:text-white/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Ingresa tu contraseña:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********"
            className="bg-black-font rounded-lg border border-white placeholder:font-light
            placeholder:text-sm placeholder:text-white/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-green-700 text-white w-full rounded-lg py-3 mt-6"
            onClick={() => createAnAccount()}
          >
            Crear cuenta
          </button>
        </Link>
      </form>
    );
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
