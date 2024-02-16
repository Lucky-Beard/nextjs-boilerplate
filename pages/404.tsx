import { NextPageWithLayout } from './_app';
import HeadSeo from '@/components/base-components/Head';
import { Box, Button, Typography } from '@mui/material';

const NotFound: NextPageWithLayout = (props: any) => {
  return (
    <div>
      <HeadSeo page_title="Page not found" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#000'
        }}
      >
        <Typography variant="h1" style={{ color: 'white' }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }} marginBottom={5}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button href="/">Back Home</Button>
      </Box>
    </div>
  );
};

NotFound.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default NotFound;
