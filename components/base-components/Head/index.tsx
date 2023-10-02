import Head from 'next/head';

interface Props {
  page_title: string;
  description?: string;
  preventIndexing?: boolean;
  keywords?: string[];
  name?: string;
}

const HeadSeo: React.FC<Props> = ({
  page_title = '',
  preventIndexing = false,
  description = 'Burstone',
  keywords = ['Properties', 'Vacancies', 'Europe', 'South Africa', 'Australia'],
  name = ' | Burstone'
}) => {
  return (
    <Head>
      <title>{`${page_title}${name}`}</title>

      <link rel="icon" href="/favicon.svg" />
      <meta name="description" content={description} />
      <meta property="og:title" content={page_title} key="title" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {(preventIndexing || process.env.NEXT_ENVIRONMENT !== 'production') && (
        <meta name="robots" content="noindex" />
      )}

      {(preventIndexing || process.env.NEXT_ENVIRONMENT !== 'production') && (
        <meta name="googlebot" content="noindex" />
      )}
    </Head>
  );
};

export default HeadSeo;
