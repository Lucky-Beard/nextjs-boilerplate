/* A PAGE DEDICATED FOR LISTING ALL COMPONENTS TO AVOID REDUNDANT COMPONENTS */


import type { NextPage } from 'next';
import styles from './index.module.scss';


interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <h1> I AM HEADINGI N LAYOUT</h1>
            <main>{children}</main>
        </>
    );
}