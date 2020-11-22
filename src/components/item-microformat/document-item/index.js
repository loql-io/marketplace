import React from 'react';
import Link from 'next/link';

import { H3 } from 'ui';
import ContentTransformer from 'ui/content-transformer';
// import VideoPlayer from 'components/video-player';

import {
  Outer,
  Text,
  MediaWrapper,
  MediaInner,
  //Img,
  Description,
  Subtitle
} from './styles';

export default function DocumentItem({ data, colSpan = '12' }) {
  if (!data) {
    return null;
  }

  const { name, path } = data;

  let image;
  const images = data.components?.find((c) => c.type === 'images');
  image = images?.content?.images?.[0];
  const description = data.components?.find((c) => c.name === 'Intro');
  const video = data.components?.find((c) => c.name === 'Video');
  const subtitle = data.components?.find((c) => c.name === 'Subtitle');

  //let media;

  if (video?.content?.videos?.length) {
    /*
    media = (
      <VideoPlayer
        {...video.content.videos[0]}
        autoplay
        loop
        controls={false}
      />
    );*/
  } else if (image) {
    /*
    media = (
      <Img
        {...image}
        alt={name}
        sizes={`(min-width ${screen.md}px) 33vw, 100vw`}
      />
    );
    */
  } else {
    return (
      <Link href={path} passHref>
        <Outer span={colSpan}>
          <Text>
            <H3>{name}</H3>
            <Description>
              <ContentTransformer {...description?.content?.json} />
            </Description>
          </Text>
        </Outer>
      </Link>
    );
  }

  return (
    <Link href={path} passHref>
      <Outer span={colSpan}>
        <MediaWrapper>
          <MediaInner
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(252, 252, 252, 0), rgba(47, 43, 39, 1)),
              url(${image.url})`
            }}
          />
        </MediaWrapper>
        <Text>
          <H3>{name}</H3>
          {subtitle && subtitle.content.text && (
            <Subtitle>{subtitle.content.text}</Subtitle>
          )}
        </Text>
      </Outer>
    </Link>
  );
}
