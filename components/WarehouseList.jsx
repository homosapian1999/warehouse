import { useSelector } from "react-redux";
import WarehouseCard from "./WarehouseCard";
// import WarehouseDetailPage from "./WarehouseDetailPage";

const WarehousesList = () => {
  const warehouses = useSelector((state) => state.warehouses);
  return (
    <div className="container">
      <div className="searchBar">
        <button>Search</button>
        <input type="text" />
      </div>
      <div className="list">
        {warehouses.map((warehouse) => {
          return <WarehouseCard warehouse={warehouse} key={warehouse.id} />;
        })}
      </div>
      {/* <WarehouseDetailPage warehouse={warehouses} /> */}
    </div>
  );
};

export default WarehousesList;
