import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
        </div>
      </div>
    </div>
  );
};

export default App;
