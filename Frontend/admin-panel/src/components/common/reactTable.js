import { useMemo } from 'react';
import React from 'react';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table';

import SearchBox from './searchBox';
import PositionedMenu from './positionedMenu';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Tooltip from '@mui/material/Tooltip';
import './css/reactTable.css';

const ReactTable = ({ rowData, columnData, tablePageSize, tablePageIndex }) => {
  const data = useMemo(() => rowData, [rowData]);
  const columns = useMemo(() => columnData, [columnData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: tablePageIndex, pageSize: tablePageSize },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const handleFilter = (e) => {
    setGlobalFilter(e.target.value);
  };

  return (
    <div className="container mt-3">
      <div className="row mb-4 d-flex align-items-cente justify-content-between">
        {/* Table Search box */}
        <div className="col-4 ">
          <SearchBox
            value={globalFilter || ''}
            onChange={handleFilter}
            placeholder={'Search all columns...'}
          />
        </div>
        {/* Table option buttons */}
        <div className="col d-flex justify-content-end align-items-center">
          <Tooltip title="Add new">
            <IconButton aria-label="add-new">
              <PersonAddIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          {/* Table Start */}
          <table {...getTableProps()}>
            {/* Table header */}
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i class="fa fa-caret-down"></i>
                          ) : (
                            <i class="fa fa-caret-up"></i>
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  ))}
                  {/* Action button column */}
                  <th>Actions</th>
                </tr>
              ))}
            </thead>

            {/* Table Body Start */}
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <>
                        <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                      </>
                    ))}
                    {/* Option menu button */}
                    <td align="center">
                      <PositionedMenu />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row ">
        <div className="col d-flex justify-content-end align-items-center">
          {/* Table Pagination */}
          <div className="pagination">
            <div className="pagination-buttons">
              <button
                className="custom-button "
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {<i class="fa fa-angle-double-left"></i>}
              </button>
              <button
                className="custom-button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {<i class="fa fa-angle-left"></i>}
              </button>
              <button
                className="custom-button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {<i class="fa fa-angle-right"></i>}
              </button>
              <button
                className="custom-button"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {<i class="fa fa-angle-double-right"></i>}
              </button>
            </div>
            <div className="pagination-details">
              <span>Page </span>

              <div className="input-box">
                <input
                  type="number"
                  value={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                />
              </div>
              <span>of {pageOptions.length}</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTable;
