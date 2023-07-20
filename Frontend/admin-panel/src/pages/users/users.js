import { useMemo } from 'react';

import { COLUMNS } from './columns';
import fakeData from '../../data/MOCK_DATA.json';
import ReactTable from '../../components/common/reactTable';

const User = (props) => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <ReactTable
      rowData={data}
      columnData={columns}
      tablePageSize={5}
      tablePageIndex={0}
    />
  );
};

export default User;

/*  // MUI table

import fakeData from '../../data/MOCK_DATA.json';
import { COLUMNS } from './columns';
import { useMemo } from 'react';
import PositionedMenu from '../../components/common/positionedMenu';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function MaterialTable() {
  const rows = useMemo(() => fakeData, []);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.accessor}>{column.Header} </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              {Object.entries(row).map(([key, value]) => (
                <TableCell component="th" scope="row" key={key}>
                  {value}
                </TableCell>
              ))}
              <TableCell key="menu-cell">
                <PositionedMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaterialTable;


*/
