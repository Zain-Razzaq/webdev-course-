const TableRow = ({ name, startDate, endDate, status, manager }) => {
  return (
    <tr>
      <td>{name}</td>
      <td className="d-none d-xl-table-cell">{startDate}</td>
      <td className="d-none d-xl-table-cell">{endDate}</td>
      <td>
        <span className="badge bg-success">{status}</span>
      </td>
      <td className="d-none d-md-table-cell">{manager}</td>
    </tr>
  );
};

export default TableRow;
