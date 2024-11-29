import { Link } from 'react-router-dom';
import './side.css';
type SideButtonProps = {
  text: string;
  to: string; 
  customStyle?: string; 
  icon: string
};

let hov = true
export default function SideButton({ text, to, customStyle, icon }: SideButtonProps) {
  return (
    <Link id='but' to={to} className={`md:w-full lg:w-[15vw] xl:w-[12vw] text-[13px] sm:text-base my-5 hover:bg-[#139869] hover:shadow  p-2   rounded-lg text-[#439775] hover:text-white border  border-[#139869] ${customStyle}`}>
      <div  className="w-full h-full block">
        <img   src={icon} className={`rounded text-center w-2/12 inline-block mx-2  text-white  `}/> 
          {text}
      </div>
      </Link>
  );
}
