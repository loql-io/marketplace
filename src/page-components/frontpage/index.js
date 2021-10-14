import React from 'react';

import Layout from 'components/layout';
import { simplyFetchFromGraph } from 'lib/graph';
import fragments from 'lib/graph/fragments';
import { Header } from 'ui';
import { Outer } from './styles';
import ShapeComponentsHome from 'components/shape/componentsHome';
import ShapeComponentsLoql from 'components/shape/componentsLoql';
import StaticHome from '../../static/home';
import Shops from '../../components/layout/shops';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';

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
        path: isBlog ? '/blog-home' : '/home',
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
  const title = isBlog
    ? `Home page: Digital solutions to power the high street`
    : catalogue?.name;
  return (
    <Layout title={title} preview={preview}>
      <Outer>
        <Header centerContent>
          {TENANT === 'loql' ? (
            <>
              <ShapeComponentsLoql components={componentsRest} />
              <Shops />
            </>
          ) : isBlog ? (
            <StaticHome />
          ) : (
            <ShapeComponentsHome components={componentsRest} />
          )}
        </Header>
      </Outer>
    </Layout>
  );
}
