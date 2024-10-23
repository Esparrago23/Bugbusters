import { MultiWallet } from '@/features/multiwallet/ui/wallet';
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
    <header className='w-full items-center flex  h-20 justify-between'>
      <h1 className='text-[#439775] m-10 text-xl h-full items-center flex p-2 rounded font-bold'>
        <Logo></Logo>
        Subastalo
        </h1>
      {isAccountVisible && <MultiWallet/>}
    </header>
  );
}
export { Header }

