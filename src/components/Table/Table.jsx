import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../TableData/BasicTable";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Employe Data</h1>
        <button
          onClick={() => {
            navigate("/user");
          }}
        >
          Add Employee
        </button>
      </div>
      <BasicTable users={users} />
    </div>
  );
};

export default Table;
