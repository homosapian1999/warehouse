import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesList from "../components/WarehouseList";
import WarehouseDetailPage from "../components/WarehouseDetailPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" Component={WarehousesList} />
        <Route path="/detail/:id" Component={WarehouseDetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
