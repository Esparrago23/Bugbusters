import SideButton from "./SideButton";

export default function Sidebar() {
  // Ejemplo de textos y rutas para cada botón
  const buttons = [
    { text: 'Configuracion', to: '/usuario' },
    { text: 'Ofertaste', to: '/ofertaste' },
    { text: 'Como postor', to: '/como_postor' },
    { text: "Subastalo", to: "/subastalo"}
  ];

  return (
    <div className=' flex justify-evenly bg-gray-200  md:flex-col items-center p-2 md:w-1/5 md:z-[-1] md:fixed md:top-0 md:justify-center  md:h-full border rounded-lg'>
      {buttons.map((button, index) => (
        <SideButton key={index} text={button.text} to={button.to}/>
      ))}
    </div>
  );
}

//w-1/6  fixed top-0 z-[-1]  
