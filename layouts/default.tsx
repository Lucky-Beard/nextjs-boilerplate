/* A PAGE DEDICATED FOR LISTING ALL COMPONENTS TO AVOID REDUNDANT COMPONENTS */

import type { NextPage } from 'next';
import styles from './index.module.scss';
import NavBar from '../components/base-components/NavBar';
import Footer from '../components/base-components/Footer';
import Menu from '../components/base-components/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
