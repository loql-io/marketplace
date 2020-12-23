import { simplyFetchFromGraph } from 'lib/graph';

export const categories = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
    query{
      topics{
        name
        children{
          name
        }
      }
    }
      `
  });
  return { ...data };
};
export default categories;
