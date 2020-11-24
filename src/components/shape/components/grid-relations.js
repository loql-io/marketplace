import { GridItem } from 'components/grid';
import { GridContainer, SectionTitle, GridDiv } from './styles';

export default function GridRelations({ grids }) {
  if (!grids) {
    return null;
  }

  return grids.map((grid, index) => (
    <GridContainer key={index}>
      <SectionTitle>{grid.name}</SectionTitle>
      <GridDiv
        model={grid}
        cellComponent={({ cell }) => (
          <GridItem data={cell.item} gridCell={cell} extra={true} />
        )}
      />
    </GridContainer>
  ));
}
