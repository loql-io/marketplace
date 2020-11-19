import React from 'react';

import Layout from 'components/layout';
import { simplyFetchFromGraph } from 'lib/graph';
import fragments from 'lib/graph/fragments';
import { Header } from 'ui';
import { Outer } from './styles';
import ShapeComponentsHome from 'components/shape/componentsHome';

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
        path: '/home',
        version: preview ? 'draft' : 'published'
      }
    });

    return { ...data, preview };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function FrontPage({ catalogue, preview }) {
  const componentsRest = catalogue?.components?.filter((c) => c.name);
  ///console.log(componentsRest[1].content.grids[0].rows[0].columns[0].item?.components)

  return (
    <Layout title={catalogue.name} preview={preview}>
      <Outer>
        <Header centerContent>
          <ShapeComponentsHome components={componentsRest} />
        </Header>
      </Outer>
    </Layout>
  );
}
