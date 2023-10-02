import type { NextPage } from 'next';
import styles from './index.module.scss';
import NavBar from '../components/base-components/NavBar';
import Footer from '../components/base-components/Footer';
import { scrollTriggerAnimations } from '@/animations/scroll-triggers';
import { useGSAP } from '@/hooks/useGSAP';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useGSAP(() => {
    scrollTriggerAnimations();
  }, []);

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
