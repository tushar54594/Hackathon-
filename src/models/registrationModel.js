const mongoose = require('mongoose');

const patientSchema =new mongoose.Schema({
    name: {
        type:String,
        required: true,
        min:3,
        max:20,
    },
    age: {
        type:number,
        required: true,
    },
    gender: {
        type: number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        max:50,
    },
    dob: {
        type: String,
        required: true,
    },
    mobile: {
        type: number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }, 
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
        min: 6,
        max:6,
    }, 
    history: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Patient", patientSchema);
