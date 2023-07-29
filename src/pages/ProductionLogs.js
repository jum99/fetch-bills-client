import React from "react";
import "./ProductionLogs.css";
import ListOfLogs from "../components/ListOfLogs";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProductionLogs = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className=" h-16 px-4 flex items-center justify-between">
        <p style={{color:'rgb(118 80 59)'}} className=" fs-14">PRODUCTION LOGS</p>
        <div className="flex">
          {
           user?.email && <>
           <h2 style={{color:'rgb(118 80 59)'}} className="m-3 font-bold">{user?.displayName}</h2>
           <button className="logout-btn" onClick={logout}>Logout</button>
           </>
          }
        </div>
        <Link to="/layout/addProductionLog">
          <button className="regular-btn">Add Production Logs</button>
        </Link>
      </div>
      <div className="flex justify-between bg-white p-8 w-3/4 mb-5 rounded-lg">
        <div className="">
          <p>Start from</p>
          <p>16/09/21</p>
        </div>
        <div>
          <p>End to</p>
          <p>16/09/21</p>
        </div>
        <div>
          <button className="regular-btn">Search</button>
        </div>
      </div>

      <ListOfLogs />
    </div>
  );
};

export default ProductionLogs;
