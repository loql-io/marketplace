import { simplyFetchFromGraph } from 'lib/graph';

export const getLatestBlogPosts = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
    query {
      catalogue(language: "en", path: "/posts") {
        ...item
        ...folder
      }
    }
    fragment item on Item {
      id
      name
      type
      path
      topics {
       id
       name
     }
      components {
        ...component
      }
    }
    fragment folder on Folder {
      children {
        ...item
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
      meta {
        key
        value
      }
      content {
        ...singleLine
        ...richText
        ...imageContent
        ...paragraphCollection
        ...dateTimeContent
      }
    }
    fragment image on Image {
      url
      altText
      key
      variants {
        url
        width
        key
      }
    }
    fragment imageContent on ImageContent {
      images {
        ...image
      }
    }
    fragment singleLine on SingleLineContent {
      text
    }
    fragment richText on RichTextContent {
      json
      html
      plainText
    }
    fragment paragraphCollection on ParagraphCollectionContent {
      paragraphs {
        title {
          ...singleLine
        }
        body {
          ...richText
        }
        images {
          ...image
        }
      }
    }
    fragment dateTimeContent on DatetimeContent {
        datetime
    }
      `
  });

  return { ...data };
};

export default getLatestBlogPosts;
