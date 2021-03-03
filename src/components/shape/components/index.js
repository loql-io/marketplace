import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentTransformer from 'ui/content-transformer';

import { responsive } from 'ui';

import ParagraphCollection from './paragraph-collection';
import PropertiesTable from './properties-table';
import Images from './images';
import Videos from './videos';
import ItemRelations from './item-relations';
import GridRelations from './grid-relations';

const ContentOuter = styled.div`
  /*margin: 1em var(--content-padding);*/

  ${responsive.xs} {
    margin: 0;
  }
`;

const ProductFooter = styled.div`
  /*margin: 1em var(--content-padding);*/
  width: 50%;
  min-height: 55px;
  display: inline-grid;
  ${responsive.xs} {
    width: 100%;
  }
`;

const ShapeComponents = ({ components, overrides, pageType }) => {
  if (!components || !Array.isArray(components)) {
    return null;
  }

  const productFooterTable = (pageType, component, key) => {
    if (pageType === 'product') {
      return (
        <ProductFooter key={key}>
          <PropertiesTable {...component.content} />
        </ProductFooter>
      );
    } else {
      return (
        <ContentOuter key={key}>
          <PropertiesTable {...component.content} />
        </ContentOuter>
      );
    }
  };

  const productFooterRelated = (pageType, component, key) => {
    if (pageType === 'product') {
      return (
        <ProductFooter key={key}>
          <ItemRelations {...component.content} />
        </ProductFooter>
      );
    } else {
      return (
        <ContentOuter key={key}>
          <ItemRelations items={component.content.items} />
        </ContentOuter>
      );
    }
  };

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

          if (type === 'paragraphCollection') {
            if (!component.content.paragraphs) {
              return null;
            }

            Component = Component || ParagraphCollection;

            return (
              <Component
                key={key}
                paragraphs={component.content.paragraphs}
                name={component.name}
              />
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

          if (type === 'singleLine') {
            Component = Component || 'div';
            return (
              <ContentOuter key={key}>
                <Component>{component.content.text}</Component>
              </ContentOuter>
            );
          }

          if (type === 'propertiesTable') {
            return productFooterTable(pageType, component, key);
          }

          if (type === 'itemRelations') {
            return productFooterRelated(pageType, component, key);
          }

          if (type === 'gridRelations') {
            Component = Component || GridRelations;
            return <Component key={key} grids={component.content.grids} />;
          }

          if (type === 'datetime') {
            Component = Component || 'div';
            return (
              <ContentOuter key={key}>
                <Component>{component.content.text}</Component>
              </ContentOuter>
            );
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
