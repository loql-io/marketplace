import { simplyFetchFromGraph, simplyFetchFromGraphQl } from 'lib/graph';
/**
 * Gets open boolean from tenant
 */
export const homePageShape = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
      query {
        catalogue(language: "en", path: "/home") {
          ...item
          ...folder
        }
        }
        fragment item on Item {
        shape{
          name
          identifier
        }
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
        id
        type
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

export const booleanContent = async (identifier, tenantId) => {
  const { data } = await simplyFetchFromGraphQl({
    query: `
      query{
        shape {
          get(identifier: "${identifier}", tenantId: "${tenantId}") {
            identifier
            type
            name
              components {
                id
                type
                name
                description
                config{
                  ...componentConfig
                }
              }
            items(language: "en"){
              components{
                name
                componentId
                content{
                  ...booleanContent
                  ...chunkContent

                	}
              	}
            	}
            }
          }
        }

        fragment booleanContent on BooleanContent{
          value
        }

        fragment chunkContent on ContentChunkContent{
          chunks{
            name
            componentId
            content{
               ...booleanContent
            }
          }
        }

        fragment componentConfig on ComponentConfig {
          ...contentChunkComponentConfig
        }

        fragment contentChunkComponentConfig on ContentChunkComponentConfig{
          components{
            name
            id
            description
          }
        }
      `
  });
  return { ...data };
};

export const sideNavigation = async (id) => {
  const { data } = await simplyFetchFromGraphQl({
    query: `
    query {
    	folder {
    		get(id: "${id}", language: "en", versionLabel: current) {
    			...item
    		}
    	}
    }

    fragment item on Item {
    	id
    	name
    	type
    	components {
    		...component
    	}
    }

    fragment component on Component {
    	name
    	type
    	content {
    		...content
    	}
    }

    fragment content on ComponentContent {
    	...propertiesTable
    }

    fragment propertiesTable on PropertiesTableContent {
    	sections {
    		title
    		properties {
    			key
    			value
    		}
    	}
    }`
  });
  return { ...data };
};

export default homePageShape;
