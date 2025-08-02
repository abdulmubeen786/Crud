import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  console.log(user);

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:3000/users", user)
  //       .finally(() => {
  //         alert("User Rigester Successfully");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  const submituser = () => {
    axios
      .post("http://localhost:3000/users", user)
      .finally(() => {
        alert("User Rigester Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add new User</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          gap: "2px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Number"
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
          }}
        />
        <button
          onClick={() => {
            submituser();
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Input;
