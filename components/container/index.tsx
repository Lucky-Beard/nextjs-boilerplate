import { ReactNode } from 'react';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';

interface Props { 
  children: ReactNode;
}

const Container: React.FC<Props> = ({
  children
}) => {
  const s = useStyles(styles);

  return (
    <div className={s('container')}>{children}</div>
  );
};

export default Container;
