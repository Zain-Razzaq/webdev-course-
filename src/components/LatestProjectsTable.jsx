import TableRow from "./TableRow";

const LatestProjectsTable = () => {
  return (
    <div className="col-12 col-lg-6 col-xl-5 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <h5 className="card-title mb-0">Latest Projects</h5>
        </div>
        <table className="table table-hover my-0">
          <thead>
            <tr>
              <th>Name</th>
              <th className="d-none d-xl-table-cell">Start Date</th>
              <th className="d-none d-xl-table-cell">End Date</th>
              <th>Status</th>
              <th className="d-none d-md-table-cell">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows for each project */}
            <TableRow
              name="Project Apollo"
              startDate="01/01/2020"
              endDate="31/06/2020"
              status="Done"
              manager="Carl Jenkins"
            />
            <TableRow
              name="Project Fireball"
              startDate="01/01/2020"
              endDate="31/06/2020"
              status="Cancelled"
              manager="Bertha Martin"
            />
            <TableRow
              name="Project Fireball"
              startDate="01/01/2020"
              endDate="31/06/2020"
              status="Cancelled"
              manager="Bertha Martin"
            />
            <TableRow
              name="Project Hades"
              startDate="01/01/2020"
              endDate="31/06/2020"
              status="Done"
              manager="Stacie Hall"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestProjectsTable;
