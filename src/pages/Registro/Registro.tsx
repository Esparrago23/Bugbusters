import FormRegistro from "./FormRegistro";

export default function Registro() {
  return (
    <div className="w-full h-screen flex ">
      <div className="w-1/2 ">
        <h1>Subastalo</h1>
        <p>¿Quieres participar en subastas a sobre cerrado de articulos de coleccion</p>
        <p>¿Te preocupa tu seguridad?</p>
        <p>¿Quieres permanecer en el total anonimato?</p>
        <span>¡Subastalo es para ti!</span>
      </div>
      <div className="w-1/2 bg-[#439775] text-white">
        <div>
          <span className="w-full h-20 items-center flex justify-end p-5">¿ya tienes cuenta? <button className=" p-1 text-[#439775] ml-6 rounded-3xl bg-white font-semibold ">Iniciar sesion</button> </span>
          <p className="w-full p-5 text-3xl text-center">Utilizando tecnología blockchain, aseguramos que nadie mas tenga acceso a tu información personal.</p>
          <FormRegistro></FormRegistro>
        </div>
      </div>
    </div>
  )
}
