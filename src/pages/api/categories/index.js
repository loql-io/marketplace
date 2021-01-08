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
                    image {
                      ...image
                    }
                  }
                }
              }
            }
            }

          }
        }
      }
      fragment image on Image {
        url
        altText
        variants {
          url
          width
          height
        }
      }
      `
  });
  return { ...data };
};
export default categories;
