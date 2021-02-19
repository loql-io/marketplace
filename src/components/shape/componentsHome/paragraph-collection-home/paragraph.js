import ContentTransformer from 'ui/content-transformer';

import {
  Outer,
  Body,
  Text,
  Title,
  CollectDeliveryTimeContainer,
  Pill
} from './styles';

const Paragraph = ({ body, title, images }) => {
  return (
    <>
      <Outer
        style={{
          backgroundImage: `url(${images?.[0].url})`
        }}
      >
        <CollectDeliveryTimeContainer>
          {process.env.NEXT_PUBLIC_ORDER_COLLECTION &&
            !process.env.NEXT_PUBLIC_ORDER_DELIVERY && (
              <Pill>
                <span>Collect only</span>
              </Pill>
            )}
          {!process.env.NEXT_PUBLIC_ORDER_COLLECTION &&
            process.env.NEXT_PUBLIC_ORDER_DELIVERY && (
              <Pill>
                <span>Delivery only</span>
              </Pill>
            )}
          {process.env.NEXT_PUBLIC_ORDER_COLLECTION &&
            process.env.NEXT_PUBLIC_ORDER_DELIVERY && (
              <>
                <Pill>
                  <span>Collect</span>
                </Pill>
                <Pill>
                  <span>Delivery</span>
                </Pill>
              </>
            )}
        </CollectDeliveryTimeContainer>
      </Outer>
      <Text>
        {!!title && title.text && <Title>{title.text}</Title>}
        {body?.json?.length > 0 && (
          <Body>
            <ContentTransformer {...body.json} />
          </Body>
        )}
      </Text>
    </>
  );
};

export default Paragraph;
