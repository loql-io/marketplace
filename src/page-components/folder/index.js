import React from 'react';

import { simplyFetchFromGraph } from 'lib/graph';
import { Outer, Header } from 'ui';
import Layout from 'components/layout';
import Grid, { GridItem } from 'components/grid';
import ShapeComponents from 'components/shape/components';
import ItemMicroformat from 'components/item-microformat';
import Topics from 'components/blog/topics';
import { List, SectionTitle } from './styles';
import query from './query';
const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';

export async function getData({ asPath, language, preview = null }) {
  const { data } = await simplyFetchFromGraph({
    query,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });

  return { ...data, preview };
}

export default function FolderPage({ folder, preview }) {
  const { children } = folder;

  const gridRelations = folder.components
    ?.filter((c) => c.type === 'gridRelations')
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], []);
  const rest = folder.components?.filter((c) => c.type !== 'gridRelations');

  let sorted = [];

  Object.values(children).forEach(function (item, index) {
    if (item.type === 'document') {
      sorted.push({
        blogPost: isBlog ? true : false,
        index: index,
        date: item.components.find((x) => x.type === 'datetime')?.content
          .datetime,
        ...item
      });
    }
  });

  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));

  const childrenData = sorted ? sorted : children;

  return (
    <Layout title={folder.name} preview={preview}>
      <Outer>
        <Header centerContent>
          <SectionTitle>{isBlog ? 'Latest' : folder.name}</SectionTitle>

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
          : childrenData && (
              <List>
                {childrenData.map((item, i) => (
                  <ItemMicroformat item={item} key={i} index={i} />
                ))}
              </List>
            )}

        {isBlog && <Topics />}
      </Outer>
    </Layout>
  );
}
