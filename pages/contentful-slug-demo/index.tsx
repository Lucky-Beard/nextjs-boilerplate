import { NextPageWithLayout } from '@/pages/_app';
import styles from './index.module.scss';
import Layout from '@/layouts/default';
import { useStyles } from '@/hooks/useStyles';
import { useEffect } from 'react';
import HeadSeo from '@/components/base-components/Head';
import { fetcher } from 'services/helpers';
import useSWR from 'swr';

const query = `query legalDocumentsCollectionQuery {
legalDocumentsCollection {
    items {
      name
      slug
    }
  }
}`;

const Page: NextPageWithLayout = ({ initialData }: any) => {
  const s = useStyles(styles);

  const { data } = useSWR(query, fetcher, {
    fallbackData: initialData
  });

  useEffect(() => {}, [data]);

  return (
    <>
      <HeadSeo page_title="Contentful Slug Demo" />
      {data.data.legalDocumentsCollection.items.map(
        (item: any, index: number) => {
          // do stuff here
        }
      )}
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticProps({ params }: any) {
  const response = await fetcher(query, true);

  return {
    props: {
      initialData: response
    }
  };
}
