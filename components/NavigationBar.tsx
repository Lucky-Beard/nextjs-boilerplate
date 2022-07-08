import type { NextComponentType } from 'next';
import styles from './index.module.scss';

const NavigationBar: NextComponentType = () => {

    return (
        <div className={styles.container}>
            I am a navigation bar
        </div>
    );
};

export default NavigationBar;
