import SidebarItem from "./SidebarItem";
import UpgradeComponent from "./UpgradeComponent";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <SidebarItem title="Dashboard" link={"index.html"} />
          <SidebarItem title="Orders" link={"index.html"} />
          <SidebarItem title="Products" link={"index.html"} />
        </ul>
        <div className="sidebar-cta">
          <UpgradeComponent />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
