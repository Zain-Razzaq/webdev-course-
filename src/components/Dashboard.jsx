import BrowserUsageCard from "./BrowserUsageCard";
import CoffeeMenuItem from "./CoffeeMenuItem";
import LatestProjectsTable from "./LatestProjectsTable";
import MonthlyMovementCard from "./MonthlyMovementCard";
import MonthlySalesCard from "./MonthlySalesCard";
import StartDayComponent from "./StartDayComponent";
import StatCard from "./StatCard";
import VideoComponent from "./VideoComponent";

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
      <div className="row">
        <MonthlyMovementCard />
        <LatestProjectsTable />
      </div>
      <div className="row">
        <BrowserUsageCard />
        <MonthlySalesCard />
        <StartDayComponent />
      </div>
      <div className="row">
        <VideoComponent />
      </div>
      <div className="row">
        <CoffeeMenuItem
          name="Cappuccino"
          price="23"
          description="Usage of the Internet is becoming more common due to rapid advance."
        />
        <CoffeeMenuItem
          name="Cappuccino"
          price="23"
          description="Usage of the Internet is becoming more common due to rapid advance."
        />
        <CoffeeMenuItem
          name="Cappuccino"
          price="23"
          description="Usage of the Internet is becoming more common due to rapid advance."
        />
        <CoffeeMenuItem
          name="Cappuccino"
          price="23"
          description="Usage of the Internet is becoming more common due to rapid advance."
        />
      </div>
    </div>
  );
};

export default Dashboard;
