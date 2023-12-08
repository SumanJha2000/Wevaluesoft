import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';

const DataTable = ({ columns, data, onDelete }) => {
    console.log(data, 'data')
    const navigate = useNavigate();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const onEdit = (rowData) => {
        console.log(rowData, 'rowData');
        navigate('/update', { state: { data: rowData } });
    };



    return (
        <div className='d-flex justify-content-center'>
            <table
                {...getTableProps()}
                style={{
                    borderCollapse: 'collapse',
                    width: '90%',
                    border: '1px solid #ddd',
                    marginTop: '20px',
                }}
            >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        background: '#f2f2f2',
                                        padding: '8px',
                                        textAlign: 'left',
                                        borderBottom: '1px solid #ddd',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th style={{ background: '#f2f2f2', padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                style={{
                                    borderBottom: '1px solid #ddd',
                                    background: index % 2 === 0 ? '#f9f9f9' : '#ffffff', // Alternating row colors
                                }}
                            >
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '8px',
                                            borderBottom: '1px solid #ddd',
                                            borderRight: '1px solid #ddd', // Add border to the right of each cell
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                                <td className="d-flex" style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                                    {/* Edit button */}
                                    <button onClick={() => onEdit(row.original)}><i className='fa fa-edit'></i></button>
                                    {/* Delete button */}
                                    <button onClick={() => onDelete(row.original.id)}><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
