
export default function FormRegistro() {
    return (
      <form className="bg-white w-1/2 text-[#439775] flex flex-col items-center  ">
        <label htmlFor="">Nombre de usuario:<input type="text" /></label>
        <label htmlFor="">Contraseña<input type="text" /></label>
        <label htmlFor="">Confirmar contraseña<input type="text" /></label>
        <button>Crear cuenta</button>
    </form>
       
    )
  }
  