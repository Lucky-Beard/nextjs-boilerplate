import styles from './index.module.scss';
import Image from 'next/legacy/image';
import { useStyles } from '@/hooks/useStyles';
interface Props {
  // username: string;
}

const NavBar: React.FC<Props> = (props) => {
  const s = useStyles(styles);
  return (
    <div className={s('container')}>
      <Image
        className={s('logo')}
        src="/vercel.svg"
        width={72}
        height={16}
        alt="company logo"
      />
      <div className={s('nav-links')}>
        <a href="" className={s('link')}>
          Home
        </a>
        <a href="" className={s('link')}>
          About us
        </a>
        <a href="" className={s('link')}>
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
