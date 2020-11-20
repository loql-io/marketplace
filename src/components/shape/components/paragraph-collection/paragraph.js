import ContentTransformer from 'ui/content-transformer';
import { H3 } from 'ui';

import {
  Outer,
  Title,
  Body,
  Text,
  Media,
  OuterReview,
  BodyReview,
  ImagesReview,
  ReviewText,
  ReviewTitle
} from './styles';
import Images from '../images';
import Videos from '../videos';

const Paragraph = ({
  body,
  title,
  images,
  videos,
  name,
  headingComponent: HeadingComponent = H3
}) => {
  if (name === 'Review') {
    return (
      <OuterReview>
        <ReviewText>
          {body?.json?.length > 0 && (
            <BodyReview>
              <ImagesReview images={images} />
              {!!title && title.text && (
                <ReviewTitle>
                  <HeadingComponent>{title.text}</HeadingComponent>
                </ReviewTitle>
              )}
              <ContentTransformer {...body.json} />
            </BodyReview>
          )}
        </ReviewText>
      </OuterReview>
    );
  } else {
    return (
      <Outer>
        <Text>
          {!!title && title.text && (
            <Title>
              <HeadingComponent>{title.text}</HeadingComponent>
            </Title>
          )}
          {body?.json?.length > 0 && (
            <Body>
              <ContentTransformer {...body.json} />
            </Body>
          )}
        </Text>
        <Media>
          <Images images={images} />
          <Videos videos={videos} />
        </Media>
      </Outer>
    );
  }
};

export default Paragraph;
