/* eslint-disable no-unreachable */

import React from 'react';
import styled from 'styled-components';
import CrystallizeContentTransformer from '@crystallize/content-transformer/react';
import TwitterIcon from '../../public/static/TW.svg';
import FacebookIcon from '../../public/static/Facebook.svg';
import LinkedInIcon from '../../public/static/LI.svg';
import InstagramIcon from '../../public/static/Instagram.svg';
import PinterestIcon from '../../public/static/Pinterest.svg';
import WebsiteIcon from '../../public/static/Website.svg';
import LocationIcon from '../../public/static/Location.svg';
import ContactIcon from '../../public/static/Contact.svg';
import { formatCurrency } from '../lib/currency';
import IsOpenToday from '../components/openTimes';

const minOrder = Number(process.env.NEXT_PUBLIC_SHOP_MIN_ORDER || 0);

const commonTransfomerOverrides = {
  // Example of a link override
  link({ metadata, renderNode, ...rest }) {
    const { href } = metadata;
    switch (rest.children[0].textContent) {
      case '[twitter]':
        return (
          <SocialLink href={href} target="_blank">
            <TwitterIcon />
          </SocialLink>
        );
        break;
      case '[linkedin]':
        return (
          <SocialLink href={href} target="_blank">
            <LinkedInIcon />
          </SocialLink>
        );
        break;
      case '[facebook]':
        return (
          <SocialLink href={href} target="_blank">
            <FacebookIcon />
          </SocialLink>
        );
        break;
      case '[instagram]':
        return (
          <SocialLink href={href} target="_blank">
            <InstagramIcon />
          </SocialLink>
        );
        break;
      case '[pinterest]':
        return (
          <SocialLink href={href} target="_blank">
            <PinterestIcon />
          </SocialLink>
        );
        break;
      case '[website]':
        return (
          <BusinessLinks href={href} target="_blank">
            <WebsiteIcon />
            <span>Website</span>
          </BusinessLinks>
        );
        break;
      case '[location]':
        return (
          <BusinessLinks href={href} target="_blank">
            <LocationIcon />
            <span>Find us</span>
          </BusinessLinks>
        );
        break;
      case '[phone]':
        return (
          <BusinessLinks href={href}>
            <ContactIcon />
            <span>{href.replace(/tel:/, '')}</span>
          </BusinessLinks>
        );
        break;
      case '[opening-hours]':
        return (
          <BusinessLinks href={href}>
            <span>View opening hours</span>
          </BusinessLinks>
        );
        break;
      default:
        return (
          <a className="fancy-link" href={href}>
            {renderNode(rest)}
          </a>
        );
    }
  },

  paragraph({ metadata, renderNode, ...rest }) {
    const openData = IsOpenToday();

    if (rest.children[0]?.textContent?.includes('[icon-phone]')) {
      return (
        <PhoneContainer>
          <PhoneIcon src="/static/phone.svg" />
          <PhoneNumber>
            {rest.children[0]?.textContent?.replace('[icon-phone]', '')}
          </PhoneNumber>
        </PhoneContainer>
      );
    } else if (rest.children[0]?.textContent?.includes('[min-order]')) {
      return (
        minOrder > 0 && (
          <BusinessInfo>
            <Dot>•</Dot>
            {minOrder > 0
              ? rest.children[0]?.textContent?.replace(
                  '[min-order]',
                  `${formatCurrency({
                    amount: minOrder,
                    currency: 'gbp'
                  })} min. order value`
                )
              : ''}
          </BusinessInfo>
        )
      );
    } else if (rest.children[0]?.textContent?.includes('[open-hours]')) {
      return openData.isOpen ? (
        <BusinessInfo>
          Open now until {openData.openTimesToday.end}
        </BusinessInfo>
      ) : (
        <BusinessInfo>Sorry, We&apos;re Closed</BusinessInfo>
      );
    } else {
      return <p>{renderNode(rest)}</p>;
    }
  }
};

const maxWidth = '100%';

const SocialLink = styled.a`
  border-bottom: none;
  margin: 0 auto;
  img {
    height: 30px;
  }
`;

const BusinessLinks = styled.a`
  border-bottom: none;
  font-size: 14px;
  svg {
    position: absolute;
    margin-top: 2px;
  }
  span {
    margin: 0 10px 0 20px;
    text-decoration: underline;
  }
`;

const Dot = styled.a`
  color: #c0a9a8;
  margin: 0 10px;
`;

const PhoneContainer = styled.div`
  display: inline-flex;
  margin-bottom: 30px;
`;

const BusinessInfo = styled.div`
  display: inline-block;
  font-weight: 800;
  margin-bottom: 20px;
`;

const PhoneNumber = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
`;

const PhoneIcon = styled.img`
  display: inline-block;
  margin: -2px 10px 0 0;
`;

const ContentTransformerOuter = styled.div`
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
    text-align: left;
    max-width: ${maxWidth};
    color: #2f2b27;
  }
  h3 {
    font-size: 2rem;
  }
  p,
  li {
    font-size: 16px;
    line-height: 22px;
  }

  p {
    text-align: left;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  ol {
    margin-left: 20px;
    > li {
      margin-top: 10px;
    }
  }
  ul {
    max-width: ${maxWidth};
    margin: 0 auto;
    display: block;
    list-style: none;
    margin: 1em 0 1em 30px;

    > li {
      position: relative;
      display: block;

      &:not(:last-child) {
        margin-bottom: 1em;
      }

      &::before {
        position: absolute;
        width: 8px;
        top: 50%;
        margin-top: -5px;
        left: -30px;
        height: 8px;
        content: '';
        border-radius: 50%;
        background: rgb(143, 222, 203);
      }
    }
  }

  pre {
    margin-left: calc(-0.5 * var(--content-padding));
    width: calc(100% + var(--content-padding));
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 2px 1px 1px;
    line-height: 1.6;
    padding: 25px 50px;
    background: rgb(243, 244, 246);
    border-radius: 5px;
    overflow: auto;
  }

  blockquote {
    font-size: 16px;
    line-height: 22px;
    border-left: solid 10px #d0d0d0;
    padding-left: 1em;
  }
`;

export default function ContentTransformer(props) {
  return (
    <ContentTransformerOuter>
      <CrystallizeContentTransformer
        {...props}
        overrides={commonTransfomerOverrides}
      />
    </ContentTransformerOuter>
  );
}
