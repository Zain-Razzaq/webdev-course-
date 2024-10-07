const CoffeeMenuItem = ({ name, price, description }) => {
  return (
    <div className="col-lg-3">
      <div className="single-menu">
        <div className="title-div justify-content-between d-flex">
          <h4>{name}</h4>
          <p className="price float-right">${price}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CoffeeMenuItem;
