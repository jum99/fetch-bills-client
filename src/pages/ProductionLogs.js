import React from "react";
import "./ProductionLogs.css";
import ListOfLogs from "../components/ListOfLogs";
import { Link } from "react-router-dom";

const ProductionLogs = () => {
  return (
    <div>
      <div className=" h-16 px-4 flex items-center justify-between">
        <p>PRODUCTION LOGS</p>
        <Link to="/addProductionLog">
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
