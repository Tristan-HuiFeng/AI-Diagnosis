const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientRecordsSchema = new Schema({
    patient_id: {
        type: String,
        unique: true,
        required: true
    },
    patient_name: {
        type: String,
        required: true,
    },
    NRIC: {
        type: String,
        required: true,
        unique: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    blood_type: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    allergies: {
        type: String,
        required: true,
    },
    medical_history: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    doctor_name: {
        type: String,
        required: true
    },
    doctor_email: {
        type: String,
        required: true
    },
    doctor_contact: {
        type: String,
        required: true
    },
    medical_image: {
        type: Array,
        required: true
    }
});

const PatientRecords = mongoose.model('patient_records', patientRecordsSchema);

module.exports = PatientRecords;