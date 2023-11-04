import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesList from "../components/WarehouseList";
import WarehouseDetailPage from "../components/WarehouseDetailPage";

const App = () => {
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
