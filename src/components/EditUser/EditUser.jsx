import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();

  const [user, setUserUpdate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUserUpdate(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(user);

  const submitdata = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, user)
      .then(() => {
        alert("successfull");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit User</h1>
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
          value={user.name}
          onChange={(e) => {
            setUserUpdate({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="User Name"
          value={user.username}
          onChange={(e) => {
            setUserUpdate({ ...user, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            setUserUpdate({ ...user, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Number"
          value={user.phone}
          onChange={(e) => {
            setUserUpdate({ ...user, phone: e.target.value });
          }}
        />
        <button
          onClick={() => {
            submitdata();
          }}
        >
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
