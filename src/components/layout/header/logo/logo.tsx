import { Link } from 'react-router-dom';
import './logo.module.scss';

function Logo() {
  return (
    <Link className='' to="/">
      <img className='w-[50px]' src="/icons8-subasta-100.png" alt="logo" />
    </Link>
  );
}

export { Logo };

