import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  open?: boolean;
  toggleOpen?: () => void;
  className?: string;
}

const BurgerMenu: React.FC<Props> = ({
  open = false,
  className,
  toggleOpen
}) => {
  const s = useStyles(styles);

  return (
    <div
      className={`
      ${s('responsive-menu-toggle')} 
      ${open ? s('menu-open') : ''} 
      ${className ? className : ''}`}
      onClick={toggleOpen}
    >
      <span className={`${s('bar')} ${s('bar1')}`}></span>
      <span className={`${s('bar')} ${s('bar2')}`}></span>
      <span className={`${s('bar')} ${s('bar3')}`}></span>
      <span className={`${s('bar')} ${s('bar4')}`}></span>
      <span className={`${s('bar')} ${s('bar5')}`}></span>
    </div>
  );
};

export default BurgerMenu;
