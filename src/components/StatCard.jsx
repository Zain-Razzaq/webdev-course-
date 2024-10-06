const StatCard = ({ title, value, percentage, icon, statColor }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col mt-0">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-auto">
              <div className={`stat ${statColor}`}>
                <i className={`align-middle`} data-feather={icon}></i>
              </div>
            </div>
          </div>
          <h1 className="mt-1 mb-3">{value}</h1>
          <div className="mb-0">
            <span className={`${statColor}`}> <i className="mdi mdi-arrow-bottom-right"></i> {percentage} </span>
            <span className="text-muted">Since last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
