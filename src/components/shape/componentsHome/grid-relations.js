import { GridItem } from 'components/grid';
import {
  GridContainer,
  GridDiv
  //More,
  //MoreMobile
} from './styles';

export default function GridRelations({ grids }) {
  if (!grids) {
    return null;
  }

  return grids.map((grid, index) => (
    <GridContainer key={index}>
      <GridDiv
        model={grid}
        cellComponent={({ cell }) => (
          <GridItem data={cell.item} gridCell={cell} />
        )}
      />
      {/*
      <MoreMobile
        href={`/${grids[0].rows[0].columns[0].item.path.split('/')[1]}`}
      >
        More {grids[0].name}
      </MoreMobile>
      */}
    </GridContainer>
  ));
}
