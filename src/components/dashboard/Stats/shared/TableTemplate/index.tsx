import React from 'react';
import TableHeader from '../TableHeader';
import { Table } from 'react-bootstrap';
import styles from './index.module.scss';
import { TableColumn } from '@src/models/stats';
import { DropdownItem } from '@src/models/dropdownItem';

interface Props {
  data: any[];
  columns: TableColumn[];
  tableHeader: string;
  dropdownItems?: DropdownItem[];
  buttonLabel?: string;
  rankingToHighlight?: number;
}

export default function TableTemplate({
  data,
  columns,
  dropdownItems,
  tableHeader,
  buttonLabel,
  rankingToHighlight,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <TableHeader
        title={tableHeader}
        buttonLabel={buttonLabel}
        dropdownItems={dropdownItems}
      />
      <div className={styles.table_body}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No:</th>
              {columns.map((column) => {
                return <th key={column.id}>{column.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr
                  key={index}
                  className={rankingToHighlight === row['ranking'] ? styles.highlighted : ''}
                >
                  <td>{row['ranking']}</td>
                  {columns.map((column) => {
                    return <td key={column.id}>{row[column.id]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
