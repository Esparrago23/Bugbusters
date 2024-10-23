import { MultiWallet } from '@/features/multiwallet/ui/wallet';
import styles from './header.module.scss';
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
    <header className={styles.header}>
      <Logo />
      {isAccountVisible && <MultiWallet/>}
    </header>
  );
}

export { Header };

