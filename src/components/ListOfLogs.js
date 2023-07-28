import React, { useEffect, useState } from "react";

const ListOfLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`https://fetch-bills-server.onrender.com/logs`)
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">LIST OF LOGS</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
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
                  <p>#{log._id}</p>
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
