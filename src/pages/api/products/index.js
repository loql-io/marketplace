import { simplyFetchFromSearchGraph } from 'lib/graph';

export const products = async (term) => {
  const { data } = await simplyFetchFromSearchGraph({
    query: `
      query {
        search(
          filter: {
            searchTerm: "${term}"
            type: PRODUCT
            include: { topicNames: ["${term}"] }
            productVariants: { isDefault: true }
          }
        ) {
          edges {
            node {
              name
              id
              path
              ... on Product {
                variants {
                  price
                  name
                  priceVariants{
                    currency
                  }
                  images{
                    url
                  }
                }
              }
            }
          }
        }
      }
      `
  });
  return { ...data };
};
export default products;
