
export default function CardSubasta() {
  return (
    <div className="w-full flex  justify-center">
        <div className='w-1/2 h-[500px] border  rounded mt-5 flex flex-col items-center justify-between  p-2 my-2'> 
          <div className='w-3/4 h-1/4 bg-black/5 '>
          </div>
          <img className="w-3/4 bg-black/5 h-1/2 " src="" alt="Imagen del producto" />
          <input className="w-3/4 p-2 bg-transparent placeholder:text-black/60 border-b border-black" placeholder="Ingresa un monto" type="number" />
          <button className="bg-green-500 p-2 rounded object-cover w-1/2"> Ofertar </button>
        </div>
    </div>
  )
}
