const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      {/* Sidebar toggle button */}
      <button
        className="sidebar-toggle js-sidebar-toggle"
        onClick={toggleSidebar}
        style={{ all: "unset" }}
      >
        <i className="hamburger align-self-center"></i>
      </button>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="align-middle" data-feather="settings"></i>
            </a>
            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="img/avatars/avatar.jpg"
                className="avatar img-fluid rounded me-1"
                alt="img"
              />{" "}
              <span className="text-dark">Charles Hall</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
