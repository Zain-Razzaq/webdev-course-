import { Bar } from "react-chartjs-2";

const MonthlySalesCard = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "This year",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: true }, ticks: { stepSize: 10 } },
    },
  };

  return (
    <div className="col-12 col-lg-4 col-xxl-3 d-flex">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Monthly Sales</h5>
        </div>
        <div className="card-body d-flex w-100">
          <div className="align-self-center chart chart-lg">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySalesCard;
