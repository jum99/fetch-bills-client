import React from "react";
import "./AddProductionLog.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddProductionLog = () => {
  const { register, reset, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const logs = {
      date: data.date,
      shift: data.shift,
      machine: data.machine,
      operator: data.operator,
      helper: data.helper,
      packingPerson: data.packingPerson,
      jobName: data.jobName,
      pouchNumber: data.pouchNumber,
      waste: data.waste,
    };
    console.log("logs", logs);
    reset();
    alert("new production log added");

    navigate(from, { replace: true });

    fetch("https://fetch-bills-server.onrender.com/addLogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(logs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="add-form">
        <input
          type="text"
          placeholder="Date"
          name="date"
          {...register("date")}
        />
        <input
          type="text"
          placeholder="Shift"
          name="shift"
          {...register("shift")}
        />
        <input
          type="text"
          placeholder="Machine"
          name="machine"
          {...register("machine")}
        />
        <input
          type="text"
          placeholder="Operator"
          name="operator"
          {...register("operator")}
        />

        <input
          type="text"
          placeholder="Helper"
          name="helper"
          {...register("helper")}
        />
        <input
          type="text"
          placeholder="Packing Person"
          name="packingPerson"
          {...register("packingPerson")}
        />
        <input
          type="text"
          placeholder="Job Name"
          name="jobName"
          {...register("jobName")}
        />
        <input
          type="text"
          placeholder="No. of Pouch"
          name="pouchNumber"
          {...register("pouchNumber")}
        />
        <input
          type="text"
          placeholder="Waste"
          name="waste"
          {...register("waste")}
        />

        <button type="submit" className="add-btn">
          Add Production Log
        </button>
      </form>
    </div>
  );
};

export default AddProductionLog;
