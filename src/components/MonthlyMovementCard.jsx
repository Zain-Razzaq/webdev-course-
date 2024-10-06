import  { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyMovementCard = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Cleanup: Destroy chart when unmounting
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales ($)",
      fill: true,
      backgroundColor: "rgba(215, 227, 244, 1)",
      borderColor: "#007bff",
      data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327]
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: true, borderDash: [3, 3] }, ticks: { stepSize: 1000 } }
    }
  };

  return (
    <div className="col-xl-6 col-xxl-7">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Recent Movement</h5>
        </div>
        <div className="card-body py-3">
          <div className="chart chart-sm">
            <Line ref={chartRef} data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyMovementCard;
