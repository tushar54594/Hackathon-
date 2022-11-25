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
      {/* <div className="form">
        <h2>Registration Form</h2>
        <label className="head">Name</label>
        <input type="text" name="name" placeholder="Enter you name" />
        <label className="head">Age</label>
        <input type="text" name="age" placeholder="Enter you age" />
        <label className="head">Gender</label>
        <input type="text" name="gender" placeholder="Enter you gender" />
        <label className="head">Email</label>
        <input type="text" name="email" placeholder="Enter you email" />
        <label className="head">DateOfBirth</label>
        <input type="text" name="dob" placeholder="Enter you email" />
        <label className="head">Mobile Number</label>
        <input type="text" name="dob" placeholder="Enter you email" />
        <label className="head">City</label>
        <input type="text" name="city" placeholder="Enter you city" />
        State
        <input type="text" name="state" placeholder="Enter you state" />
        Pincode
        <input type="text" name="pincode" placeholder="Enter you pincode" />
        History
        <textarea rows="3" name="history" cols="40" placeholder="Enter the patient's history" />
        <button className="btn">Register</button>
      </div> */}
      </div>
  );
}

export default Body;
