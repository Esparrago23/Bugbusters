import { Link } from 'react-router-dom';
import './logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <h1 id='logo'>logo</h1>
    </Link>
  );
}

export { Logo };

