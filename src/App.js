import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import FetchBills from "./pages/FetchBills";
import ProductionLogs from "./pages/ProductionLogs";
import AddProductionLog from "./components/AddProductionLog";
import Companies from "./pages/Companies";
import CreateJob from "./pages/CreateJob";
import CreateChallan from "./pages/CreateChallan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="fetchBills" element={<FetchBills />} />
          <Route path="companies" element={<Companies />} />
          <Route path="createJob" element={<CreateJob />} />
          <Route path="createChallan" element={<CreateChallan />} />
          <Route path="productionLogs" element={<ProductionLogs />} />
        </Route>
        <Route path="addProductionLog" element={<AddProductionLog />} />
      </Routes>
    </Router>
  );
}

export default App;
