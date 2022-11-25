import React, { useState } from 'react'
import './registration.scss'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Registration() {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"light"
      };

    const [values,setValues] = useState({
        name:"",
        age:"",
        gender:"",
        email:"",
        dob:"",
        mobile:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        history:""
    });

    const handleChange=(event)=>{
        setValues({...values,[event.target.name]: event.target.value});
    };

    const handleSubmit =async  (event)=>{
        event.preventDefault();
        var ele = document.getElementsByName('gender');
              
            for(var i = 0; i < ele.length; i++) {
                if(ele[i].checked)
               { setValues({ ...values, gender: ele[i].value });
            break;}
            }
const { name, age, gender,email,mobile,address, city,pincode,state,history,dob} = values;
            const {data} = await axios.post("http://localhost:8001/api/patient/regiterpatient/",{
                name, age, gender,email,mobile,address, city,pincode,state,history,dob
            });

             if(data.status===false){
        toast.error(data.msg, toastOptions);
      }
      if(data.status===true){
        toast.error("Patient Registered Successfully", toastOptions);
      }
    };
  return (
    <div>
      <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Patient Registration Form</h2>
    </div>
    <form action="" onSubmit={(event)=> handleSubmit(event)}>
    <div class="row clearfix">
      <div class="">
        <div>
          
          <div class="row clearfix">
              <div class="input_field">
                <input type="text" name="name" onChange={(e)=> handleChange(e)} placeholder="Full Name" />
            </div>
          </div>
            <div class="input_field">
            <input type="email" name="email" onChange={(e)=> handleChange(e)} placeholder="Email" required />
          </div>
          <div class="input_field">
            <input type="text" name="age" onChange={(e)=> handleChange(e)} placeholder="Age" required />
          </div>
          <div class="input_field">
            <input type="email" name="email" onChange={(e)=> handleChange(e)} placeholder="Email" required />
          </div>
          <div class="input_field">
            <input type="text" name="dob" onChange={(e)=> handleChange(e)} placeholder="Date of Birth" required />
          </div>
          <div class="input_field">
            <input type="text" name="mobile" onChange={(e)=> handleChange(e)} placeholder="Mobile Number" required />
          </div>
          <div class="input_field">
            <input type="text" name="address" onChange={(e)=> handleChange(e)} placeholder="Address" required />
          </div>
          <div class="input_field">
            <input type="text" name="city" onChange={(e)=> handleChange(e)} placeholder="City" required />
          </div>
          <div class="input_field">
            <input type="text" name="state" onChange={(e)=> handleChange(e)} placeholder="State" required />
          </div>
          <div class="input_field">
            <input type="text" name="pincode" onChange={(e)=> handleChange(e)} placeholder="Pin Code" required />
          </div>
          <div class="input_field">
            <input type="text" name="history" onChange={(e)=> handleChange(e)} placeholder="History" required />
          </div>
            	<div class="input_field radio_option">
              <input type="radio" name="gender" id="rd1" value="male"/>
              <label for="rd1">Male</label>
              <input type="radio" name="gender" id="rd2" value="female"/>
              <label for="rd2">Female</label>
              </div>
              
          <input class="button" type="submit" value="Register" />
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Registration
