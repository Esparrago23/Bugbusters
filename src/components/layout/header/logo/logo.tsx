import { Link } from 'react-router-dom';
import './logo.module.scss';

function Logo() {
  return (
    <Link className='flex text-2xl justify-center items-center ' to="/home">
      <img className='w-[60px] mx-5' src="/icons8-subasta-100.png" alt="logo" />
      Subastalo
    </Link>
  );
}

export { Logo };

