import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWarehouses } from "../slices/warehouseSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("data/warehouses.json")
      .then((response) => response.json())
      .then((data) => dispatch(setWarehouses(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
