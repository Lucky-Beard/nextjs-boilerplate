import { NextPageWithLayout } from '@/pages/_app';
import styles from './index.module.scss';
import Layout from '@/layouts/default';
import { useStyles } from '@/hooks/useStyles';
import { useRouter } from 'next/router';
import HeadSeo from '@/components/base-components/Head';
import { fetcher } from 'services/helpers';
import useSWR from 'swr';
import { useEffect } from 'react';

const legalSlugQuery = (slug: string | string[] | undefined) => {
  return `query legalDocumentsCollectionQuery {
    legalDocumentsCollection(where: { 
      slug: "${slug}"
    }, limit: 1 ) {
      items {
        name
        seo {
          title
          description
        }
        content {
          json
        }
      }
    }
  }`;
};

const LegalSlug: NextPageWithLayout = ({ ...props }: any) => {
  const { initialData } = props;
  const { query } = useRouter();
  const { slug } = query;

  const s = useStyles(styles);

  // CHANGE QUERY
  const { data } = useSWR(legalSlugQuery(slug), fetcher, {
    fallbackData: initialData
  });

  useEffect(() => {}, [slug, data]);

  return (
    <>
      {slug && (
        <>
          <HeadSeo
            page_title={
              data.data.legalDocumentsCollection.items[0].seo
                ? data.data.legalDocumentsCollection.items[0].seo.title
                : data.data.legalDocumentsCollection.items[0].name
            }
            description={
              data.data.legalDocumentsCollection.items[0].seo
                ? data.data.legalDocumentsCollection.items[0].seo.description
                : ''
            }
          />
        </>
      )}
    </>
  );
};

LegalSlug.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LegalSlug;

export async function getStaticPaths() {
  const response = await fetcher(
    `query legalDocumentsCollectionQuery {
      legalDocumentsCollection {
        items {
          slug
        }
      }
    }`,
    true
  );

  const properties = await response.data.legalDocumentsCollection.items;
  const paths = properties.map((property: any) => ({
    params: { slug: property.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  // CHANGE QUERY
  const response = await fetcher(legalSlugQuery(slug), true);

  return {
    props: {
      initialData: response
    }
  };
}
