import React, { useEffect, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash} from "react-icons/hi";

const ListOfLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`https://fetch-bills-server.onrender.com/logs`)
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  const deleteItem = (id) => {
    fetch(`https://fetch-bills-server.onrender.com/deleteItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully", result);
        if (result) {
          alert("This product is Deleted Please refresh page");
        }
      });
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">LIST OF LOGS</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Date</th>
              <th>Shift</th>
              <th>Machine</th>
              <th>Operator</th>
              <th>Helper</th>
              <th>Packing Person</th>
              <th>Job Name</th>
              <th>No. of Pouch</th>
              <th>Waste</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log._id}>
                <td>
                <button
                    onClick={() => deleteItem(log._id)}
                    className="me-2"
                  >
                    < HiOutlineTrash/>
                  </button>
                  </td>
                  <td>
                  <button className="me-2 ">
                  <HiOutlinePencil/>
                  </button>
                  
                </td>
                
                <td>
                  <p>{log.date}</p>
                </td>
                <td>
                  <p>{log.shift}</p>
                </td>
                <td>
                  <p>{log.machine}</p>
                </td>
                <td>{log.operator}</td>
                <td>{log.helper}</td>
                <td>{log.packingPerson}</td>
                <td>{log.jobName}</td>
                <td>{log.pouchNumber}</td>
                <td>{log.waste}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfLogs;
