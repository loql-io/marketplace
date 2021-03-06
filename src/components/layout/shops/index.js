import React from 'react';
import { useAppContext } from 'components/community-context';
import {
  NavContainer,
  NavSections,
  NavInner,
  NavItem,
  Logo,
  Spacer,
  Grid,
  ImgDiv,
  Text
} from './styles';

const MainNav = () => {
  const { communityData } = useAppContext();

  const Navgation = [
    {
      section: [
        {
          type: 'Shops',
          content: communityData.shopping
        },
        {
          type: 'Eating',
          content: communityData.eating
        },
        {
          type: 'Collections',
          content: communityData.collections
        }
      ]
    }
  ];

  return (
    <NavContainer>
      {Navgation.map(({ section }) =>
        section.map(({ type, content }, i) => (
          <NavSections key={i}>
            <NavInner>
              {type !== 'footer' ? <h3>{type}</h3> : <Spacer />}
              <Grid className={type?.toLowerCase()}>
                {content?.map(({ logo, url, image, title, intro }, x) => (
                  <NavItem key={x}>
                    {image ? (
                      <a href={url}>
                        <ImgDiv
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(252, 252, 252, 0), rgba(47, 43, 39, 1)), url(${image})`
                          }}
                        >
                          <Text>
                            <h4>{title}</h4>
                            <p>{intro}</p>
                          </Text>
                        </ImgDiv>
                      </a>
                    ) : (
                      <a href={url}>
                        {logo && (
                          <Logo style={{ background: `url(${logo}) #fff` }} />
                        )}
                      </a>
                    )}
                  </NavItem>
                ))}
              </Grid>
            </NavInner>
          </NavSections>
        ))
      )}
    </NavContainer>
  );
};

export default MainNav;
