import MonthlyMovementCard from "./MonthlyMovementCard";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="p-4 ">
      <div className="row">
        <StatCard
          title="Sales"
          value="2,382"
          percentage="-3.65%"
          icon="truck"
          statColor="text-danger"
        />
        <StatCard
          title="Visitors"
          value="14,212"
          percentage="5.25%"
          icon="users"
          statColor="text-success"
        />
        <StatCard
          title="Earnings"
          value="$21,300"
          percentage="6.65%"
          icon="dollar-sign"
          statColor="text-success"
        />
        <StatCard
          title="Orders"
          value="64"
          percentage="-2.25%"
          icon="shopping-cart"
          statColor="text-danger"
        />
          </div>
          <div>
              <div>
                  <MonthlyMovementCard/>
              </div>
          </div>
    </div>
  );
};

export default Dashboard;
