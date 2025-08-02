import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Input from "./screens/AddUser/Input";
import EditUser from "./components/EditUser/EditUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Input />} />
        <Route path="/useredit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
