const Patient = require('../models/registrationModel');

module.exports.patientRegister = async(req,res,next)=>{
    try {
        const {name, age, gender, email, dob, mobile, address, city, state, pincode, history } = req.body;
      const patientCheck = await Patient.findOne({ name },{email});
      if (patientCheck)
        return res.json({ msg: "Patient Already registered", status: false });
      
      
      const patient = await Patient.create({
        name,
        age,
        gender,
        email,
        dob, 
        mobile,
        address,
        city,
        state,
        pincode,
        history
      });
      
      return res.json({ status: true, patient });
    } catch (error) {
        next(error);
    }
};


module.exports.getPatient = async (req, res, next) => {
  try {
    // console.log("calling");
    const patient = await Patient.find();
    res.json(patient);
  } catch (ex) {
    next(ex);
  }
};