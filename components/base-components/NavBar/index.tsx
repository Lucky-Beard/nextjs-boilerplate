import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import LogoImage from '@/assets/images/logo.svg';
import Logo from '@/components/base-components/Logo';
import Menu from '../Menu';
import { useEffect, useState } from 'react';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [colorChange, setColorchange] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const s = useStyles(styles);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const onToggleMobileMenu = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor, true);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <header
      className={`${s('container')} 
      ${colorChange ? s('scrolled') : ''} 
      ${open ? s('mobile-dropdown-open') : ''}`}
    >
      <div className={`container ${s('inner')}`}>
        <Logo className={s('logo')} src={LogoImage} />
        <Menu toggleMobileMenu={onToggleMobileMenu} />
      </div>
    </header>
  );
};

export default NavBar;
