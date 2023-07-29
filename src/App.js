import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import FetchBills from "./pages/FetchBills";
import ProductionLogs from "./pages/ProductionLogs";
import AddProductionLog from "./components/AddProductionLog";
import Companies from "./pages/Companies";
import CreateJob from "./pages/CreateJob";
import CreateChallan from "./pages/CreateChallan";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import RequireAuth from "./components/Login/Login/RequireAuth";
import RequireAdmin from "./components/Login/Login/RequireAdmin";
import MakeAdmin from "./pages/MakeAdmin";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="register" element={<Register />} />

        <Route path="layout" element={<RequireAuth>
          <Layout />
        </RequireAuth>
        }>
          <Route path="productionLogs" element={
            <RequireAdmin>
            <ProductionLogs />
          </RequireAdmin>
          } />
          <Route path="fetchBills" element={
          <RequireAdmin>
          <FetchBills />
          </RequireAdmin>
          } />
          <Route path="companies" element={
          <RequireAdmin>
          <Companies />
          </RequireAdmin>
          } />
          <Route path="createJob" element={
          <RequireAdmin>
          <CreateJob />
          </RequireAdmin>
          } />
          <Route path="createChallan" element={
          <RequireAdmin>
          <CreateChallan />
          </RequireAdmin>
          } />
          <Route path="makeAdmin" element={
          <RequireAdmin>
          <MakeAdmin />
          </RequireAdmin>
          } />
          <Route index element={<Dashboard />} />
          <Route path="addProductionLog" element={
          <RequireAdmin>
          <AddProductionLog />
          </RequireAdmin>
          } />
        </Route>          
      </Routes>
       </AuthProvider>
       </BrowserRouter>
  );
}

export default App;
