import { useState } from "react";
import SideButton from "./SideButton";

export default function Sidebar() {
  // Estado para controlar la visibilidad del formulario
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  // Función para mostrar/ocultar el formulario
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Ejemplo de textos y rutas para cada botón
  const buttons = [
    { text: 'Configuracion', to: '/usuario' },
    { text: 'Ofertaste', to: '/ofertaste' },
    { text: 'Como postor', to: '/como_postor' },
    { text: 'Subastalo', to : '/subastalo'} // Agrega solo la función para "Subastalo"
  ];

  return (
    <div className="flex justify-evenly bg-gray-200 md:flex-col items-center p-2 md:w-1/5 md:z-[-1] md:fixed md:top-0 md:justify-center md:h-full border rounded-lg">
      {buttons.map((button, index) => (
        <SideButton
          key={index}
          text={button.text}
          to={button.to} // Pasar "to" solo si existe
          //onClick={button.onclick} // Pasar "onClick" solo si existe
        />
      ))}

      {/* Muestra el formulario de subasta si isFormVisible es true */}
    </div>
  );
}
