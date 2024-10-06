import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import "./assets/css/app.css";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div className="wrapper">
        {isSidebarVisible && <Sidebar />}
        <div className={`main ${isSidebarVisible ? "" : "main-expanded"}`}>
          <Navbar toggleSidebar={toggleSidebar} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
