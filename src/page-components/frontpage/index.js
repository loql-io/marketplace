import React from 'react';

import Layout from 'components/layout';
import Grid, { GridItem } from 'components/grid';
import { simplyFetchFromGraph } from 'lib/graph';
import fragments from 'lib/graph/fragments';
//import { useT } from 'lib/i18n';
import { Header } from 'ui';
import { Outer } from './styles';
import ShapeComponents from 'components/shape/components';
import ItemMicroformat from 'components/item-microformat';
import { List } from '../folder/styles';
export async function getData({ language, preview = null }) {
  try {
    const { data } = await simplyFetchFromGraph({
      query: `
        query FRONTPAGE($language: String!, $path: String!,  $version: VersionLabel!) {
          catalogue(path: $path, language: $language, version: $version) {
            ...item
            ...product
          }
        }

        ${fragments}
      `,
      variables: {
        language,
        path: '/web-frontpage',
        version: preview ? 'draft' : 'published'
      }
    });
    //console.log(data.catalogue.components)
    return { ...data, preview };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function FrontPage({ catalogue, preview }) {
  //const t = useT();
  const [grid] =
    catalogue?.components?.find((c) => c.type === 'gridRelations')?.content
      ?.grids || [];

  const { children } = catalogue;
  const gridRelations = catalogue.components
    ?.filter((c) => c.type === 'gridRelations')
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], []);
  const rest = catalogue.components?.filter((c) => c.type !== 'gridRelations');
  //console.log(rest);

  return (
    <Layout title={catalogue.name} preview={preview}>
      <Outer>
        <Header centerContent>
          <ShapeComponents components={rest} />
        </Header>
        {gridRelations?.length > 0
          ? gridRelations?.map((grid, index) => (
              <Grid
                key={index}
                model={grid}
                cellComponent={({ cell }) => (
                  <GridItem data={cell.item} gridCell={cell} />
                )}
              />
            ))
          : children && (
              <List>
                {children.map((item, i) => (
                  <ItemMicroformat item={item} key={i} />
                ))}
              </List>
            )}
      </Outer>
      <Outer>
        {grid && (
          <Grid
            model={grid}
            cellComponent={({ cell }) => (
              <GridItem data={cell.item} gridCell={cell} />
            )}
          />
        )}
      </Outer>
    </Layout>
  );
}
