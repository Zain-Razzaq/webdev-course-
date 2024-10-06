const SidebarItem = ({ title, link }) => {
  return (
    <li className="sidebar-item">
      <a className="sidebar-link" href={link}>
        <span className="align-middle">{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
