import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormRegistro from "./FormRegistro";

export default function Registro() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  };

  return (
    <div className="w-full h-screen flex font-thin">
      <div className="w-1/2 flex text-[#439775] items-center justify-center">
        <div className="border border-[#439775] w-3/4 rounded-lg h-3/4 justify-between text-center flex flex-col text-3xl p-10">
          <h1>Subástalo</h1>
          <p>¿Quieres participar en subastas a sobre cerrado de artículos de colección?</p>
          <p>¿Te preocupa tu seguridad?</p>
          <p>¿Quieres permanecer en el total anonimato?</p>
          <span>¡Subastalo es para ti!</span>
        </div>
      </div>
      <div className="w-1/2  bg-[#439775] text-white">
        <div>
          <span className="w-full h-20 items-center flex justify-end p-5">
            ¿Ya tienes cuenta?
            <Link to={"/login"} className="p-1 text-[#439775] ml-6 rounded-3xl bg-white font-semibold">
              Iniciar sesión
            </Link>
          </span>
          <p className="w-full p-5 text-3xl text-center">
            Aseguramos que nadie más tenga acceso a tu información personal.
          </p>
          <div className="w-full mt-10 flex justify-center">
            <FormRegistro
              nombreUsuario={nombreUsuario}
              setNombreUsuario={setNombreUsuario}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
