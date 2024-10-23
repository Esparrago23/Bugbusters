import FieldForm from "@/components/Form/FieldForm";
const FormRegistro: React.FC = () =>{
    const mensaje = "Nombre de usuario"
    return (
      <form className="
      bg-white 
      rounded-xl 
      h-[50vh] w-1/2 
      text-[#439775] 
      justify-between  
      flex flex-col items-center p-5
        ">
        <FieldForm placeholder="Ingresa un nombre de usuario" mensaje='Nombre de usuario' ></FieldForm>
        <FieldForm placeholder="Crea una contraseña segura" mensaje='Contraseña' ></FieldForm>
        <FieldForm placeholder="Confirma tu contraseña" mensaje='Confirma tu contraseña' ></FieldForm>
        <button className="border border-green-500 p-2 rounded-lg">Crear cuenta</button>
    </form>
       
    )
  }
  export default FormRegistro;
  