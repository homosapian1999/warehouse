import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWarehouses } from "../slices/warehouseSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesList from "../components/WarehouseList";
import WarehouseDetailPage from "../components/WarehouseDetailPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("data/warehouses.json")
      .then((response) => response.json())
      .then((data) => dispatch(setWarehouses(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={WarehousesList} />
        <Route path="/detail/:id" Component={WarehouseDetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
