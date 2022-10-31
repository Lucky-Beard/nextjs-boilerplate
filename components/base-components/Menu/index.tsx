import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
interface Props {
    // username: string;
}

const Menu: React.FC<Props> = (props) => {

    const s = useStyles(styles);
    return (
        <div className={s('container')}>
            
        </div>
    );
};

export default Menu;
