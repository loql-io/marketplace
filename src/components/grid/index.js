import GridRenderer from '@crystallize/grid-renderer';
import styled from 'styled-components';

import { responsive } from 'ui';

export { default as GridItem } from './grid-item';

const StyledGrid = styled(GridRenderer)`
  /*grid-gap: 2px;*/
  /*grid-template-rows: 700px;*/
  ${responsive.sm} {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
  }

  ${responsive.xs} {
    display: block !important;
    grid-template-columns: 100% !important;
  }
`;

export default function Grid({ model, ...rest }) {
  if (!model) {
    return null;
  }

  return <StyledGrid model={model} {...rest} />;
}
