async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] }
    }
  ).then((response) => response.json());
}

export async function exampleWithSlugQuery(slug: string | null): Promise<any> {
  const data = await fetchGraphQL(
    `query investorRelationsCollectionQuery {
      investorRelationsCollection(where: { slug: "${slug}", limit: 1)
        items {
          name,
          pageTitle,
          documentType,
          alternativeBreadcrumbText,
          digitalContentCollection {
            items {
              name,
              type,
              description,
              link,
              image {
                url,
                width,
                height
              }
            }
          }
        }
      }
    }`
  );

  return data?.data?.investorRelationsCollection?.items?.[0];
}

export async function exampleWithYearfilter(
  type: string | null,
  year: string | null
): Promise<any> {
  const data = await fetchGraphQL(
    `query investorMediaCollectionQuery {
      investorMediaCollection(where:{ type_contains_all: "${type}", date_gte: "${year}-01-01", date_lte: "${year}-12-31" }) {
        items {
          title,
          date,
          document {
            url,
            contentType,
            size
          }
        }
      }
    }`
  );

  return data?.data?.investorMediaCollection?.items;
}
