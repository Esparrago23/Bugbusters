import FieldForm from "@/components/Form/FieldForm";
import React from 'react';

type Props = {
  nombreUsuario: string; // El estado que quieres pasar
  setNombreUsuario: (value: string) => void; // Función para cambiar el estado
  onClick: () => void; // Función al hacer clic en el botón
};

const FormRegistro: React.FC<Props> = ({ nombreUsuario, setNombreUsuario, onClick }) => {
  // Función que maneja el cambio en el input de nombre de usuario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombreUsuario(e.target.value); // Actualiza el estado en el componente padre
  };

  return (
    <form className="bg-white rounded-xl h-[60vh] w-1/2 text-[#439775] justify-between flex flex-col items-center p-5">
      <FieldForm
        placeholder="Ingresa un nombre de usuario"
        mensaje="Nombre de usuario"
        value={nombreUsuario} 
        onChange={handleInputChange} 
      />
      <FieldForm placeholder="Crea una contraseña segura" mensaje="Contraseña" />
      <FieldForm placeholder="Confirma tu contraseña" mensaje="Confirma tu contraseña" />
      <button onClick={onClick} className="border border-green-500 p-2 rounded-lg">
        Crear cuenta
      </button>
    </form>
  );
};

export default FormRegistro;
