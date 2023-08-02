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
import MakeAdmin from "./pages/MakeAdmin";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    
      <Routes>
        
      <Route exact path="/" element={<Login />} />
      <Route path="about" element={
      <RequireAuth><About /></RequireAuth>
      
      } />
      <Route path="register" element={<Register />} />

        <Route path="layout" element={<RequireAuth>
          <Layout />
        </RequireAuth>
        }>
          <Route path="productionLogs" element={
           
            <ProductionLogs />
         
          } />
          <Route path="fetchBills" element={
          
          <FetchBills />
          
          } />
          <Route path="companies" element={
         
          <Companies />
          
          } />
          <Route path="createJob" element={
         
          <CreateJob />
          
          } />
          <Route path="createChallan" element={
          
          <CreateChallan />
          
          } />
          <Route path="makeAdmin" element={
         
          <MakeAdmin />
         
          } />
          <Route index element={<Dashboard />} />
          <Route path="addProductionLog" element={
          
          <AddProductionLog />
         
          } />
        </Route>          
      </Routes>
       </AuthProvider>
       </BrowserRouter>
  );
}

export default App;
