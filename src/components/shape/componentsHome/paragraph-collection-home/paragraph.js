import ContentTransformer from 'ui/content-transformer';
//import { H3 } from 'ui';

import {
  Outer,
  Body,
  Text,
  Title,
  ShopDetails,
  PhoneNumber,
  CollectDeliveryTimeContainer,
  Pill
} from './styles';
//import Images from '../images';
//import Videos from '../videos';

import PhoneIcon from '../../../../../public/static/phone.svg';

const Paragraph = ({
  body,
  title,
  images
  //  headingComponent: HeadingComponent = H3
}) => {
  const phone = process.env.NEXT_PUBLIC_SHOP_PHONE;

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
        </CollectDeliveryTimeContainer>
      </Outer>
      <Text>
        {!!title && title.text && <Title>{title.text}</Title>}
        {body?.json?.length > 0 && (
          <Body>
            <ContentTransformer {...body.json} />
          </Body>
        )}
        <ShopDetails>
          {phone && (
            <>
              <PhoneIcon viewBox="0 0 40 28" />
              <PhoneNumber>{phone}</PhoneNumber>
            </>
          )}
        </ShopDetails>
      </Text>
    </>
  );
};

export default Paragraph;
