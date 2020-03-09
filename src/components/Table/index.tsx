import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const StyledTable = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border-bottom: 2px solid #ddd;

    th {
      padding: 0.625rem;
      text-align: left;
      font-weight: bold;
      background: #ededed;
    }

    td {
      padding: 0.625rem;
      border: 1px solid #ddd;
      background: white;
    }
  }
`;

const NoData = styled.p`
  margin: 0;
  text-align: center;
`;

type TableProps = {
  columns: Array<any>;
  data: Array<any>;
};

const Table: React.FC<TableProps> = ({ columns = [], data = [] }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          {!rows.length && (
            <tr>
              <td colSpan={columns.length}>
                <NoData>You currently have no entries to display.</NoData>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
