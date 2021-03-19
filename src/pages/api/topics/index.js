import { simplyFetchFromGraph } from 'lib/graph';

export const topics = async () => {
  const { data } = await simplyFetchFromGraph({
    query: `
    query{
        topics{
          name
          children{
            name
            items{
            edges{
               node {
                name
                id
                path
                topics {
                 id
                 name
               }
                ... on Document {
                  components{
                   ...component

                  }
                }
              }

            }
          }
          }

        }
      }

      fragment component on Component {
      name
      type

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
export default topics;
