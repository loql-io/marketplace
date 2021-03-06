import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentTransformer from 'ui/content-transformer';

import { responsive } from 'ui';

import ParagraphCollection from './paragraph-collection';
import ParagraphCollectionHome from './paragraph-collection-home';
import ParagraphCollectionTeam from './paragraph-collection-team';
import PropertiesTable from './properties-table';
import Images from './images';
import Videos from './videos';
import ItemRelations from './item-relations';
import GridRelations from './grid-relations';

const ContentOuter = styled.div`
  margin: 1em var(--content-padding);
  ${responsive.xs} {
    margin: 0;
  }

  & .sectionHeader {
    font-size: 32px !important;
    line-height: 36px !important;
    color: #2f2b27 !important;
    padding: 24px 0;
    font-weight: 900;
  }
`;

const ShapeComponents = ({ components, overrides }) => {
  if (!components || !Array.isArray(components)) {
    return null;
  }

  return (
    <div>
      {components
        ?.filter((component) => component.content != null)
        .map(({ type, ...component }, index) => {
          const key = index;
          let Component;

          // Check for overrides
          if (overrides && overrides[component.name]) {
            Component = overrides[component.name];
          }

          if (
            component.name === 'Hero content' &&
            type === 'paragraphCollection'
          ) {
            if (!component.content.paragraphs) {
              return null;
            }

            Component = Component || ParagraphCollectionHome;

            return (
              <Component key={key} paragraphs={component.content.paragraphs} />
            );
          }

          if (component.name === 'Team' && type === 'paragraphCollection') {
            if (!component.content.paragraphs) {
              return null;
            }

            Component = Component || ParagraphCollectionTeam;
            return (
              <Component key={key} paragraphs={component.content.paragraphs} />
            );
          }

          if (type === 'paragraphCollection') {
            if (!component.content.paragraphs) {
              return null;
            }

            Component = Component || ParagraphCollection;

            return (
              <Component key={key} paragraphs={component.content.paragraphs} />
            );
          }

          if (type === 'images') {
            if (!component.content || !component.content.images) {
              return null;
            }
            return <Images key={key} images={component.content.images} />;
          }

          if (type === 'videos') {
            if (!component.content || !component.content.videos) {
              return null;
            }
            return <Videos key={key} videos={component.content.videos} />;
          }

          if (type === 'richText') {
            if (!component.content.json) {
              return null;
            }
            Component = Component || 'div';
            return (
              <ContentOuter key={key}>
                <Component>
                  <ContentTransformer {...component.content.json} />
                </Component>
              </ContentOuter>
            );
          }

          if (type === 'singleLine' && component.name === 'Team header') {
            Component = Component || 'div';
            return (
              <ContentOuter key={key}>
                <Component className="sectionHeader">
                  {component.content.text}
                </Component>
              </ContentOuter>
            );
          }

          if (type === 'singleLine') {
            Component = Component || 'div';
            return (
              <ContentOuter key={key}>
                <Component>{component.content.text}</Component>
              </ContentOuter>
            );
          }

          if (type === 'propertiesTable') {
            Component = Component || PropertiesTable;
            return (
              <ContentOuter key={key}>
                <Component {...component.content} />
              </ContentOuter>
            );
          }

          if (type === 'itemRelations') {
            Component = Component || ItemRelations;
            return <Component key={key} items={component.content.items} />;
          }

          if (type === 'gridRelations') {
            Component = Component || GridRelations;
            return <Component key={key} grids={component.content.grids} />;
          }

          if (process.env.NODE_ENV !== 'production') {
            console.log(`Render for ${type} not implemented`);
          }

          return <span key={key} />;
        })}
    </div>
  );
};

ShapeComponents.propTypes = {
  components: PropTypes.array.isRequired,
  overrides: PropTypes.object
};

export default ShapeComponents;
