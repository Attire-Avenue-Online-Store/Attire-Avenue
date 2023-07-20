import { useMemo } from 'react';
import { COLUMNS } from './columns';
import fakeData from '../../data/MOCK_DATA.json';
import './customer.css';
import ReactTable from '../../components/common/reactTable';

const Customer = (props) => {
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

export default Customer;
