import type { NextComponentType } from 'next';
import styles from './index.module.scss';
import Image from "next/legacy/image";
import { useStyles } from '@/hooks/useStyles';
interface Props {
}

const Footer: React.FC<Props> = (props) => {

    const s = useStyles(styles);
    return (
        <div className={s('container')}>
          
        </div>
    );
};

export default Footer;
