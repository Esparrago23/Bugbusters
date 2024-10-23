import { MultiWallet } from '@/features/multiwallet/ui/wallet';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

type Props = {
  isAccountVisible: boolean;
};

/*export function Header({ isAccountVisible }: Props) {
  // const [isMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      {isAccountVisible && <MultiWallet/>}
    </header>
  );
}*/


function Header({isAccountVisible}: Props): JSX.Element {
  return (
    <header className='w-full items-center sticky top-0 bg-white flex   justify-between'>
      <h1 className='text-[#439775]  text-xl  items-center flex p-2 rounded font-bold'>
        <Logo></Logo>
      </h1>
      <Link to={"/"} className='py-2 px-5 rounded-3xl text-white bg-green-500'>Cerrar sesion</Link>
      {isAccountVisible && <MultiWallet/>}
    </header>
  );
}
export { Header };

