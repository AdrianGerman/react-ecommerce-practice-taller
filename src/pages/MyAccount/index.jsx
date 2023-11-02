import Layout from "../../components/Layout";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../context";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // update account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Nombre: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className="font-light text-sm">Correo electronico: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className="border border-slate-500 rounded-lg mt-6 py-3"
          onClick={() => setView("edit-user-info")}
        >
          Editar
        </button>
      </div>
    );
  };

  const renderEditInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Ingresa tu nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter Parker"
            className="bg-black-font rounded-lg border border-white placeholder:font-light 
            placeholder:text-sm placeholder:text-white/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Ingresa tu correo electronico
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
            Ingresa tu contraseña
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
        <button
          className="bg-blue-700 text-white w-full rounded-lg py-3 mt-6"
          onClick={() => {
            setView("user-info"), editAccount();
          }}
        >
          Editar
        </button>
      </form>
    );
  };

  const renderView = () => (view === "edit-user-info" ? renderEditInfo() : renderUserInfo());

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Mi Cuenta</h1>
      {renderView()}
    </Layout>
  );
}

export default MyAccount;
