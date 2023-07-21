import { useMemo } from 'react';
import { COLUMNS } from './columns';
import fakeData from '../../data/MOCK_DATA.json';
import './product.css';
import ReactTable from '../../components/common/reactTable';

const Product = (props) => {
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

export default Product;
