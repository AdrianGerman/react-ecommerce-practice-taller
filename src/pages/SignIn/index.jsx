import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function SingIn() {
  const context = useContext(ShoppingCartContext);

  const handleLogIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
  };

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Bienvenido!</h1>
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Correo: </span>
          <span>adrian.german1019@gmail.com</span>
        </p>
        <p>
          <span className="font-light text-sm">Contraseña: </span>
          <span>********</span>
        </p>
        <Link to="/">
          <button
            onClick={() => handleLogIn()}
            className="bg-slate-500 disabled:bg-slate-500/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
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
        <button className="border border-bg-slate-500 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
          Registrarse
        </button>
      </div>
    </Layout>
  );
}

export default SingIn;
