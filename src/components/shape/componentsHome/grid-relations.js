import Grid, { GridItem } from 'components/grid';
import { SectionTitle } from './styles';

export default function GridRelations({ grids }) {
  if (!grids) {
    return null;
  }
  return grids.map((grid, index) => (
    <>
      <SectionTitle>{grid.name}</SectionTitle>
      <Grid
        key={index}
        model={grid}
        cellComponent={({ cell }) => (
          <GridItem data={cell.item} gridCell={cell} />
        )}
      />
    </>
  ));
}
