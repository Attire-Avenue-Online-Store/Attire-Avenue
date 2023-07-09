import FilterForm from '../../hooks/filterForm';

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: '_id',
    Filter: FilterForm,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
    Filter: FilterForm,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    Filter: FilterForm,
  },
  {
    Header: 'Email',
    accessor: 'email',
    Filter: FilterForm,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Filter: FilterForm,
  },
  {
    Header: 'Address',
    accessor: 'address',
    Filter: FilterForm,
  },
];
