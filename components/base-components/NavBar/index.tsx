import type { NextComponentType } from 'next';
import styles from './index.module.scss';
import Image from 'next/image';
const NavBar: NextComponentType = () => {

    return (
        <div className={styles.container}>
           <Image className={styles['logo']} src="/vercel.svg" width={72} height={16} alt="company logo" />
           <div className={styles['nav-links']}>
            <a href="" className={styles['link']}>Home</a>
            <a href="" className={styles['link']}>About us</a>
            <a href="" className={styles['link']}>Contact us</a>
           </div>
        </div>
    );
};

export default NavBar;
