import { Pie } from "react-chartjs-2";

const BrowserUsageCard = () => {
  const data = {
    labels: ["Chrome", "Firefox", "IE"],
    datasets: [
      {
        data: [4306, 3801, 1689],
        backgroundColor: ["#007bff", "#ffc107", "#dc3545"],
        borderWidth: 5,
      },
    ],
  };

  return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Browser Usage</h5>
        </div>
        <div className="card-body d-flex">
          <div className="align-self-center w-100">
            <div className="py-3">
              <div className="chart chart-xs">
                <Pie data={data} />
              </div>
            </div>
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td>Chrome</td>
                  <td className="text-end">4306</td>
                </tr>
                <tr>
                  <td>Firefox</td>
                  <td className="text-end">3801</td>
                </tr>
                <tr>
                  <td>IE</td>
                  <td className="text-end">1689</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserUsageCard;
