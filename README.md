This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Slug pages and the sitemap

`getStaticPaths` and `getStaticProps`

This is useful for slug pages. Doing this will allow the build to generate all the slug urls in the sitemap.

### How to implement it

Open your `[slug].tsx` file (or `/slug/index.tsx`). At the very bottom of the page, below `export default yourPageName`, add the following code:

```typescript
export async function getStaticPaths() {
  // Get all the pages instead of just the one meant for that slug
  const response = await fetcher(`your-api-query`, true);

  // Map their slug urls
  const paths = response.map((item: any) => ({
    params: { slug: item.slug }
  }));

  // Save / return them
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // It would be ideal to get your slug page data here and pass it to `initialData`
  // You still need this for getStaticPaths to work
  // It won't work without it
  return {
    props: { initialData: null }
  };
}
```

### Passing initial data to slug page

This is useful for SEO purposes. All the pages get generated at runtime.

```typescript
// Where you define your page const, add the initialData response
const PropertySlugPage: NextPageWithLayout = ({ initialData }: any) => {
  return <>Your page data here</>;
};
```

## GraphQL

Documentatation for this coming soon

## Contentful CMS Integration

### 1. Install global dependencies (you only have to do this once)

https://www.contentful.com/developers/docs/tutorials/general/get-started/

Install the Gatsby CLI tool by running `npm install -g gatsby-cli`

### 2. Run the following terminal command:

`npm install @contentful/rich-text-html-renderer @contentful/rich-text-react-renderer @contentful/rich-text-types contentful contentful-import`

### 3. Create the following env files with the below snipped of code snippet of code:

- .env.local
- .env.development
- .env.production

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=...
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=...
NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET=...
NEXT_PUBLIC_CONTENTFUL_REVAILDATE_SECRET=...
NEXT_ENVIRONMENT=development
NEXT_PUBLIC_ENVIRONMENT=development
SITE_URL=http://localhost:3000
```

- `SITE_URL` must be diffrent for **.env.development** and **.env.production**
- `NEXT_ENVIRONMENT` and `NEXT_PUBLIC_ENVIRONMENT` must change to `production` for **.env.production** only.
- `...` ellipses must be replaced my generated site keys from the cms. To get these:
  - Log onto the cms. Click on **Settings"** (top right corner). It will open a menu with more options.
  - Now click o n **API Keys** then **Add API Key**
  - Add content promted and save. Remember the preview secret you created (you would have been promted to set one).
  - **NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET** and **NEXT_PUBLIC_CONTENTFUL_REVAILDATE_SECRET:** add the secret text you created previously here.
  - **Space ID:** copy and paste this next to `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
  - **Content Delivery API - access token:** copy and paste this next to `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
  - **Content Preview API - access token:** copy and paste this next to `NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN`

### 4. Examples

Slug page and overview page for slug pages: `pages/contentful-slug-demo/`
You could also do the queries inside the api.ts file and reference them in the pages. See `exampleWithSlugQuery` inside `contentful/api.ts`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
