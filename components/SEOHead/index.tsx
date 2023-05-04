import Image from "next/legacy/image";
import React from 'react';
import Head from 'next/head';


interface Props {
    children: React.ReactNode;
    preventIndexing?: boolean;
}

const SEOHead: React.FC<Props> = ({children, preventIndexing = false}) => {
    
    return (
        <Head>
            {(preventIndexing || process.env.NEXT_ENVIRONMENT !== 'production') && <meta name='robots' content='noindex' />}
            {(preventIndexing || process.env.NEXT_ENVIRONMENT !== 'production') && <meta name='googlebot' content='noindex' />}
            {children}
        </Head>
    );
};

export default SEOHead;
