import React from 'react'
import './registration.scss'

function Registration() {
  return (
    <div>
      <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Patient Registration Form</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <div>
          
          <div class="row clearfix">
            <div class="col_half">
              <div class="input_field">
                <input type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field">
                <input type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
            <div class="input_field">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input_field">
            <input type="text" name="age" placeholder="Age" required />
          </div>
          <div class="input_field">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input_field">
            <input type="text" name="dob" placeholder="Date of Birth" required />
          </div>
          <div class="input_field">
            <input type="text" name="mobile" placeholder="Mobile Number" required />
          </div>
          <div class="input_field">
            <input type="text" name="address" placeholder="Address" required />
          </div>
          <div class="input_field">
            <input type="text" name="city" placeholder="City" required />
          </div>
          <div class="input_field">
            <input type="text" name="state" placeholder="State" required />
          </div>
          <div class="input_field">
            <input type="text" name="pincode" placeholder="Pin Code" required />
          </div>
          <div class="input_field">
            <input type="text" name="history" placeholder="History" required />
          </div>
            	<div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
              </div>
              
          <input class="button" type="submit" value="Register" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Registration
