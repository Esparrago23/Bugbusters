import { Header } from "@/components/layout";
import { useAccount } from '@gear-js/react-hooks';
export default function Login() {


  const { isAccountReady } = useAccount()


  return (

    <div id="contenedor-login" className=" bg-gray-500  justify-evenly h-screen p-10 w-full flex">
      <div id="parte-izquierda" className="flex flex-col text-white hover:scale-[103%] duration-1000 justify-between rounded-3xl  p-5 bg-cards items-center w-1/2 ">
        <h1 className='text-[#439775] w-full justify-evenly bg-cards rounded-3xl text-4xl  items-center flex p-2 font-serif'>
          <span >Subastalo</span>
          <img className="" src="/icons8-subasta-100.png" alt="" />
        </h1>
        <div className="py-5 w-full h-full  flex justify-between ">
          <h1 className="w-[48%] p-5 flex flex-col justify-evenly  text-justify h-full rounded-3xl bg-gray-900">
            <span> ¿Quieres participar en subastas a sobre cerrado de articulos de colección?</span>
            <img className="rounded" src="https://img.freepik.com/fotos-premium/sobre-artesanal-marron-cerrado-sobre-fondo-oscuro-sobre-sus-felicitaciones-concepto-cero-residuos_295890-2694.jpg" alt="" />
          </h1>
          <div className="w-[48%] p-5 flex flex-col justify-evenly text-justify h-full bg-gray-900 rounded-3xl">
            <ul className="flex text-center flex-col justify-evenly h-full"> 
              <li className="">¿Te preocupa tu seguridad?</li> 
              <li> ¿quieres permanecer en el anonimato?</li>
              <li > <span className="border-b border-white" >¡Subastalo es para ti!</span> </li>
            </ul> 
          </div>
        </div>
        <h1>Quieres participar en subastas a sobre cerrado?</h1>
      </div>



      <div id="parte-derecha" className="bg-gray-800 border-2 hover:scale-[105%] duration-1000 border-green-800  rounded-3xl  w-2/6 p-5 justify-between flex flex-col items-center ">
        <header className="w-full flex justify-between text-white h-10 items-center ">
          <h2 className="text-xl text-center">Subastalo</h2>
          <img src="/icons8-subasta-100.png" className="w-1/6 drop-shadow-2xl " alt="" />
          <div className="rounded-full  bg-white">
            <Header isAccountVisible={isAccountReady} />
          </div>
        </header>
        <span className="text-white text-justify p-10 w-full block my-10">Utilizando tecnología blockchain, aseguramos que nadie mas tenga acceso a tu información personal.</span>
        <div className="w-5/6  pb-10 " >
          <img className=" shadow-2xl hover:scale-[105%] duration-1000 shadow-white/20 rounded-3xl" src="https://images.prismic.io/fabrick/e6583d54-b92d-4871-8de9-000a31884eb7_Blockchain%20-%20Articolo.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max" alt="" />
        </div>
      </div>
    </div>
  );
}

