import { simplyFetchFromGraph } from 'lib/graph';
/**
 * Gets open boolean from tenant
 */
export const shopClosed = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
      query {
        catalogue(language: "en", path: "/home") {
          ...item
          ...folder
        }
        }
        fragment item on Item {
        components {
          ...component
        }
        }
        fragment folder on Folder {
        children {
          ...product
        }
        }
        fragment product on Product {
        variants {
          stock
          price
          sku
        }
        }
        fragment component on Component {
        name
        type
        id
        content {
          ...booleanContent
        }
        }
        fragment booleanContent on BooleanContent{
            value
        }
      `
  });
  return { ...data };
};
export default shopClosed;
