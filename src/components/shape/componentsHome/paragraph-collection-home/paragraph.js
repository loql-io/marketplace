import ContentTransformer from 'ui/content-transformer';
import { H3 } from 'ui';

import { Outer, Title, Body, Text } from './styles';
//import Images from '../images';
//import Videos from '../videos';

const Paragraph = ({
  body,
  title,
  images,
  headingComponent: HeadingComponent = H3
}) => {
  return (
    <Outer
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(252, 252, 252, 0), rgba(252, 252, 252, 1)),
        url(${images?.[0].url})`
      }}
    >
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
    </Outer>
  );
};

export default Paragraph;
