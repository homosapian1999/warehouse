import { useDispatch, useSelector } from "react-redux";
import WarehouseCard from "./WarehouseCard";
import { useEffect, useRef, useState } from "react";
import { setWarehouses } from "../slices/warehouseSlice";
import { ToastContainer, toast } from "react-toastify";
// import WarehouseDetailPage from "./WarehouseDetailPage";
import "react-toastify/dist/ReactToastify.css";

const WarehousesList = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouses);
  const [searchedWarehouses, setSearchWarehouses] = useState(warehouses);
  const [isSearch, setIsSearch] = useState("Search");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCluster, setSelectedCluster] = useState("");
  const [spaceAvailableLimit, setSpaceAvailableUnit] = useState("");
  const warehouseToBeSearched = useRef("");

  const handleWarehouseSearch = () => {
    if (isSearch === "Search") {
      const results = searchedWarehouses.filter(
        (warehouse) =>
          warehouse.name === "Warehouse-" + warehouseToBeSearched.current.value
      );
      if (results.length === 0) {
        toast.error("Enter valid warehouse number");
        return;
      }
      setSearchWarehouses(results);
      setIsSearch("Reset");
      toast.success("Search Successfull");
    } else {
      setSearchWarehouses(warehouses);
      setIsSearch("Search");
      warehouseToBeSearched.current.value = "";
      toast.success("Reseted");
    }
  };

  useEffect(() => {
    if (warehouses.length === 0) {
      fetch("data/warehouses.json")
        .then((response) => response.json())
        .then((data) => dispatch(setWarehouses(data)))
        .catch((err) => console.log(err));
    } else {
      setSearchWarehouses(warehouses);
    }
  }, [warehouses, dispatch]);

  useEffect(() => {
    let filteredWarehouses = warehouses;
    if (selectedCity) {
      filteredWarehouses = filteredWarehouses.filter(
        (warehouse) => warehouse.city === selectedCity
      );
    }
    if (selectedCluster) {
      filteredWarehouses = filteredWarehouses.filter(
        (warehouse) => warehouse.cluster === selectedCluster
      );
    }

    if (spaceAvailableLimit) {
      filteredWarehouses = filteredWarehouses.filter(
        (warehouse) =>
          warehouse.space_available <= parseInt(spaceAvailableLimit)
      );
    }

    setSearchWarehouses(filteredWarehouses);
  }, [selectedCity, selectedCluster, spaceAvailableLimit, warehouses]);

  const handleReset = () => {
    setSelectedCity("");
    setSelectedCluster("");
    setSpaceAvailableUnit("");
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="searchBar">
        <div>
          <input
            type="text"
            name="warehouse"
            ref={warehouseToBeSearched}
            placeholder="Enter Only Warehouse number Eg: 165"
          />
          <button onClick={handleWarehouseSearch}>{isSearch} </button>
        </div>
        <div className="filters">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="filter"
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Indore">Indore</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Guwahati">Guwahati</option>
          </select>
          <select
            value={selectedCluster}
            onChange={(e) => setSelectedCluster(e.target.value)}
            className="filter"
          >
            <option value="">Select Cluster</option>
            <option value="cluster-a-32">cluster-a-32</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
          </select>
          <select
            value={spaceAvailableLimit}
            onChange={(e) => setSpaceAvailableUnit(e.target.value)}
            className="filter"
          >
            <option value="">Space available</option>
            <option value="1250000">Less than 1250000</option>
            <option value="1000">Less than 1000</option>
            <option value="100">Less than 100</option>
            <option value="10">Less than 10</option>
          </select>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="list">
        {searchedWarehouses.map((warehouse) => {
          return <WarehouseCard warehouse={warehouse} key={warehouse.id} />;
        })}
      </div>
      {/* <WarehouseDetailPage warehouse={warehouses} /> */}
    </div>
  );
};

export default WarehousesList;
