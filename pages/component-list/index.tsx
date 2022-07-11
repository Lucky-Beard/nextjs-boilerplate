/* A PAGE DEDICATED FOR LISTING ALL COMPONENTS TO AVOID REDUNDANT COMPONENTS */


import { NextPageWithLayout } from '../_app';
import styles from './index.module.scss';
import Layout from '../../layouts/default';

const ComponentList: NextPageWithLayout = () => {
    return (
        <div className={styles.container}>
            <main>
                This page holds a list of all the components created so that duplicates can be avoided
            </main>
        </div>
    );
};

ComponentList.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    );
  };

export default ComponentList;
