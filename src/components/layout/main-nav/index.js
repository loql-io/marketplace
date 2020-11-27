import React from 'react';

import {
  NavContainer,
  NavSections,
  NavInner,
  NavItem,
  Logo,
  Name,
  Spacer
} from './styles';

const MainNav = ({ data }) => {
  return (
    <NavContainer>
      {data.map(({ section }) =>
        section.map(({ type, content }, i) => (
          <NavSections key={i}>
            <NavInner>
              {type !== 'footer' ? <h3>{type}</h3> : <Spacer />}
              {content.map(({ logo, name, url }, x) => (
                <NavItem key={x}>
                  <a href={url}>
                    {logo && (
                      <Logo style={{ background: `url(${logo}) #fff` }} />
                    )}
                    <Name>{name}</Name>
                  </a>
                </NavItem>
              ))}
            </NavInner>
          </NavSections>
        ))
      )}
    </NavContainer>
  );
};

export default MainNav;
