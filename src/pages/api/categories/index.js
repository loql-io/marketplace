import { simplyFetchFromGraph } from 'lib/graph';

export const categories = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
    query{
        topics{
          name
          children{
            name
            items(
              first: 100
            ){
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
        }
      }
      `
  });
  return { ...data };
};
export default categories;
