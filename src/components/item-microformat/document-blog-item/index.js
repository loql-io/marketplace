import React from 'react';
import Link from 'next/link';

import {
  Outer,
  Text,
  TextMain,
  MediaWrapper,
  MediaInner,
  ItemContainer,
  Intro,
  Topics,
  TitleMain,
  Title,
  FindOurMoreButton
} from './styles';

export default function DocumentItem({ data, colSpan = '12' }) {
  if (!data) {
    return null;
  }

  const { name, path } = data;

  let image;
  const images = data.components?.find((c) => c.type === 'images');

  image = images?.content?.images?.[0];

  const intro = data.components?.find((c) => c.name === 'Intro').content
    .json?.[0].children[0].textContent;

  const allTopics = data.topics?.map((x) => x.name).join(', ');

  return (
    <ItemContainer>
      <Link href={path} passHref>
        <Outer span={colSpan}>
          <MediaWrapper>
            <MediaInner
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(47, 43, 39, 0.5), rgba(47, 43, 39, 0.5)),
                url(${image?.url})`,
                backgroundPosition: 'center'
              }}
            />
          </MediaWrapper>

          {data.index === 0 ? (
            <TextMain>
              <Topics>{allTopics}</Topics>
              <TitleMain>{name}</TitleMain>
              <Intro>{intro}</Intro>
              <FindOurMoreButton variant="contained">
                Read more
              </FindOurMoreButton>
            </TextMain>
          ) : (
            <Text>
              <Topics>{allTopics}</Topics>
              <Title>{name}</Title>
              <FindOurMoreButton variant="contained">
                Read more
              </FindOurMoreButton>
            </Text>
          )}
        </Outer>
      </Link>
    </ItemContainer>
  );
}
