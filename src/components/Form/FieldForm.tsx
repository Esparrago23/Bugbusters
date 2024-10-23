type HijoProps = {
    mensaje: string; // Define el tipo de la prop
    placeholder: string;
  };
 const FieldForm: React.FC<HijoProps> = ({ mensaje, placeholder }) => {
  return (
    <label className="w-full"  htmlFor=""> {mensaje}: <input placeholder={placeholder} className="w-full placeholder:text-[#439775]/60 rounded-lg bg-green-200 p-2 " type="text" /></label>
  )
}
export default FieldForm



