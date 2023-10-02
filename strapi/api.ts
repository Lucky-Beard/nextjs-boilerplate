// Rule of thumb, have 1 api slice per base url, i.e.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const strapiApi = createApi({
  reducerPath: 'strapiApi',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,

    prepareHeaders: (headers) => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    }
  }),

  endpoints: (builder) => ({
    getAllFlagshipFunds: builder.query<any, string>({
      query: () => {
        const downloads =
          '?populate[0]=downloads&populate[1]=downloads.files.files';
        const keyFundInformation = '&populate[2]=keyFundInformation';
        const filters = '&filters[id][$eq]=1&filters[id][$eq]=2';
        const homeIntro = '&populate[3]=homeIntro';

        return `/flagship-funds${downloads}${keyFundInformation}${homeIntro}${filters}&sort[0]=id`;
      }
    }),
    getAllInvestmentFeatures: builder.query<any, string>({
      query: () => '/investment-features?populate[0]=button&sort[0]=id'
    }),
    getAllBlogs: builder.query<any, string>({
      query: () =>
        '/blogs?populate[0]=blog_type&populate[1]=pillar&populate[2]=image.files&sort[0]=date:desc'
    }),
    getRelatedInsights: builder.query<any, string>({
      query: () => {
        const blog_articles = '?populate[0]=blog_pillars';
        const blog_type = '&populate[1]=blog_pillars.blog_type';
        const blog_image = '&populate[2]=blog_pillars.image.files';
        const blog_pillar = '&populate[3]=blog_pillars.pillar';
        return `/pillars/2${blog_articles}${blog_type}${blog_image}${blog_pillar}&pagination[pageSize]=3&sort[0]=blog_pillars.date`;
      }
    }),
    getRelatedFundArticles: builder.query<any, string>({
      query: () => {
        const blog_pillar = '?populate[0]=pillar';
        const blog_type = '&populate[1]=blog_type';
        const blog_image = '&populate[2]=image.files';
        const filters = '&filters[pillar][id][$in]=2&pagination[pageSize]=3';

        return `/blogs${blog_pillar}${blog_type}${blog_image}${filters}&sort[0]=date:desc`;
      }
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllFlagshipFundsQuery,
  useGetAllInvestmentFeaturesQuery,
  useGetAllBlogsQuery,
  useGetRelatedInsightsQuery,
  useGetRelatedFundArticlesQuery
} = strapiApi;
