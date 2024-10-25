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
    { text: 'Perfil', to: '/usuario', icon: "/icons8-usuario-de-género-neutro-50.png" },
    { text: 'Ofertaste', to: '/ofertaste',icon: "/icons8-vender-50.png" },
    { text: 'Como postor', to: '/como_postor',icon: "/icons8-jactancioso-50.png" },
    { text: 'Subastalo', to : '/subastalo', icon: "/icons8-subasta-50.png"} // Agrega solo la función para "Subastalo"
  ];

  return (
    <div className='
    border-r  border-[#139869] flex   md:flex-col items-center   p-2   
    md:fixed    md:h-full '>
      {buttons.map((button, index) => (
        <SideButton
          icon={button.icon}
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
