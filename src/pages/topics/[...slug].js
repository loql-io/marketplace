import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { capitalize } from '../../lib/capitalize';
import { topics } from '../../pages/api/topics';
import { Outer, Header } from 'ui';
import Layout from 'components/layout';
import ItemMicroformat from 'components/item-microformat';
import Topics from 'components/blog/topics';
import { List, SectionTitle } from 'components/blog/topics/styles';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';

export default function TopicsPage() {
  const [postsData, setPostsData] = useState('');

  const router = useRouter();

  const {
    query: { slug }
  } = router;

  const topic = capitalize(slug.toString());
  const title = `${topic}`;

  //TODO: redirect to a 404
  useEffect(() => {
    if (!isBlog) {
      router.push('/');
    }

    async function fetchData() {
      const response = await topics();
      setPostsData(
        response.topics?.[0].children?.filter((c) => c.name === topic)[0]?.items
          .edges
      );
    }
    fetchData();
  }, [router, topic]);

  if (!isBlog) {
    return null;
  }

  let topicsData = [];

  if (postsData) {
    Object.values(postsData).forEach(function (item, index) {
      topicsData.push(item.node);
      topicsData[index].blogPost = true;
      topicsData[index].date = item.node.components?.find(
        (x) => x.type === 'datetime'
      )?.content?.datetime;
      topicsData[index].type = 'document';
    });
  }

  topicsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (topicsData) {
    Object.values(topicsData).forEach(function (item, index) {
      topicsData[index].index = index;
    });
  }

  return (
    <Layout title={title}>
      <Outer>
        <Header centerContent>
          <SectionTitle>{title}</SectionTitle>
        </Header>

        {topicsData && (
          <List>
            {topicsData.map((item, i) => (
              <ItemMicroformat item={item} key={i} index={i} />
            ))}
          </List>
        )}
        {isBlog && <Topics />}
      </Outer>
    </Layout>
  );
}
