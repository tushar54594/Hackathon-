import React from "react";
import "./body.css";
import img from "../doctor.jpg";

function Body() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="home" className="main-img" />
        <p className="para">
          Want to know the disease which you may be facing? Have a look at our
          chatbot for finding all your answers
        </p>
      </div>
      <div className="form">
        <h2>Registration Form</h2>
        Name
        <input type="text" name="name" placeholder="Enter you name" />
        Age
        <input type="text" name="age" placeholder="Enter you age" />
        Gender
        <input type="text" name="gender" placeholder="Enter you gender" />
        Email
        <input type="text" name="email" placeholder="Enter you name" />
        DateOfBirth
        <input type="text" name="dob" placeholder="Enter you email" />
        Mobile Number
        <input type="text" name="dob" placeholder="Enter you email" />
        City
        <input type="text" name="city" placeholder="Enter you city" />
        State
        <input type="text" name="state" placeholder="Enter you state" />
        Pincode
        <input type="text" name="pincode" placeholder="Enter you pincode" />
        History
        <textarea rows="3" name="history" cols="40" placeholder="Enter the patient's history" />
      </div>
    </div>
  );
}

export default Body;
