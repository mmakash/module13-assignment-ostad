import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  let [FormObj, setFormObj] = useState({
    fname: "",
    lname: "",
    city: "",
    gender: "",
  });
  const inputOnchange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(FormObj);
  }
  return (
    <div>
      <h1>This is Form</h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => inputOnchange("fname", e.target.value)}
          value={FormObj.fname}
          placeholder="Enter First Name"
        />
        <br />
        <input
          onChange={(e) => inputOnchange("lname", e.target.value)}
          value={FormObj.lname}
          placeholder="Enter Last Name"
        />
        <br />
        <select
          onChange={(e) => inputOnchange("city", e.target.value)}
          value={FormObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="khulna">Khulna</option>
        </select>
        <br />
        <input
          onChange={() => inputOnchange("gender", "Male")}
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => inputOnchange("gender", "Female")}
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;