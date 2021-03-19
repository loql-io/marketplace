import { GridItem } from 'components/grid';
import { GridContainer, SectionTitle, GridDiv, GridBlogDiv } from './styles';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';

export default function GridRelations({ grids }) {
  if (!grids) {
    return null;
  }
  return grids.map((grid, index) => (
    <GridContainer key={index}>
      <SectionTitle>{grid.name}</SectionTitle>
      {isBlog ? (
        <GridBlogDiv
          model={grid}
          cellComponent={({ cell }) => (
            <GridItem data={cell.item} gridCell={cell} extra={true} />
          )}
        />
      ) : (
        <GridDiv
          model={grid}
          cellComponent={({ cell }) => (
            <GridItem data={cell.item} gridCell={cell} extra={true} />
          )}
        />
      )}
    </GridContainer>
  ));
}
