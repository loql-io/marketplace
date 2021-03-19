import React, { useEffect } from 'react';
import { getLatestBlogPosts } from '../../pages/api/latest-blog-posts';

const Products = () => {
  const [latestPost, setLatestPost] = React.useState('');
  const [latestPostItem, setLatestPostItem] = React.useState('');
  const [latestPostImage, setLatestPostImage] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      let sorted = [];

      const posts = await getLatestBlogPosts();

      Object.values(posts.catalogue.children).forEach(function (item) {
        sorted.push({
          date: item.components.find((x) => x.type === 'datetime')?.content
            .datetime,
          ...item
        });
      });

      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      setLatestPost(sorted[0]);
      setLatestPostItem(sorted[0].components.find((x) => x.name === 'Intro'));
      setLatestPostImage(sorted[0].components.find((x) => x.name === 'Image'));
    }
    fetchData();
  }, []);

  const allTopics = latestPost.topics?.map((x) => x.name).join(', ');

  return (
    <div
      className="setup-wrapper image-bg latest-post"
      style={{
        backgroundImage: `url('${latestPostImage?.content?.images[0].url}')`
      }}
    >
      <div className="container">
        <h2 className="h-xl">Latest</h2>

        <br />
        <br />

        <div className="image">
          <section>
            <div className="latest-post-container">
              <p className="h-s">{allTopics}</p>
              <br />
              <h3 className="h-xl">{latestPost.name}</h3>
              <p>{latestPostItem.content?.plainText}</p>
              <br />
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-contained find-out-more"
                href={latestPost.path}
              >
                Read more
              </a>
              <br />
              <br />
              <br />
              <a className="more-posts" href="/posts">
                More posts
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
