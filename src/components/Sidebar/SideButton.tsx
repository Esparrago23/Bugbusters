import { Link } from 'react-router-dom';

type SideButtonProps = {
  text: string;
  to: string; 
  customStyle?: string; 
};

export default function SideButton({ text, to, customStyle }: SideButtonProps) {
  return (
    <div className={` md:w-full lg:w-[25vw] xl:w-[18vw] text-[13px] sm:text-base hover:bg-[#139869] hover:shadow   p-2 my-2 text-center rounded-lg bg-[#439775] text-white ${customStyle}`}>
      <Link to={to} className="w-full h-full block">
      {text == "Subastalo" ? <span className='rounded inline-block px-2 mr-2 bg-black/70 '> + </span> : ""}
        {text}
      </Link>
    </div>
  );
}
