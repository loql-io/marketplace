import { screen } from './screen';

// Ready made media queries
export const responsive = new Proxy(
  {
    xs: `@media (max-width: ${screen.xsMax}px)`,
    smAndLess: `@media (max-width: ${screen.smMax}px)`,
    smPlus: `@media (min-width: ${screen.smMin}px)`,
    sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
    mdAndLess: `@media (max-width: ${screen.mdMax}px)`,
    mdPlus: `@media (min-width: ${screen.mdMin}px)`,
    md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
    lg: `@media (min-width: ${screen.lgMin}px) and (max-width: ${screen.lgMax}px)`,
    lgPlus: `@media (min-width: ${screen.xlMin}px)`,
    carouselCustom: `@media (min-width: 440px) and (max-width: 768px)`,
    variantGrid1: `@media (min-width: 844px) and (max-width: 1023px)`,
    variantGrid2: `@media (min-width: 543px) and (max-width: 843px)`
  },
  {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }

      if (!['$$typeof', 'prototype'].includes(prop)) {
        console.error(`responsive.${prop} does not exist`);
      }

      return '@media (min-width: 1px)';
    }
  }
);
