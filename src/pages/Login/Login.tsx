import { Header } from "@/components/layout";
import { useAccount } from '@gear-js/react-hooks';
export default function Login() {


  const { isAccountReady } = useAccount()


  return (

    <div id="contenedor-login" className=" w-full flex">
      <div id="parte-izquierda" className=" p-10 w-1/2 h-screen ">
        <h1 className='text-[#439775] w-full justify-evenly  text-4xl  items-center flex p-2 rounded font-serif'>
          <span >Subastalo</span>
          <img src="/icons8-subasta-100.png" alt="" />
        </h1>
      </div>



      <div id="parte-derecha" className="bg-[#439775] w-1/2 p-5 justify-between flex flex-col items-center ">
        <header className="w-full flex justify-end ">
          <div className="rounded-full hover:{} bg-white">
            <Header isAccountVisible={isAccountReady} />
          </div>
        </header>
        <div className="w-2/4 pb-10  object-cover" >
          <img className="rounded-3xl shadow-2xl shadow-black w-full" src="https://lvamexico.com/wp-content/uploads/2023/03/tipos-de-subastas-subastas-de-sobre-cerrado.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

