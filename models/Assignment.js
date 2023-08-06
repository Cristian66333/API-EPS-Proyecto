const mongoose = require('mongoose')

const { Schema } = mongoose

const AssignmentSchema = new Schema({
    documentDoctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    inicio: {
        type: Date,
        require: true
    },
    fin: {
        type: Date,
        require: true
    },
    idOffice:{
        type:Schema.Types.ObjectId,
        ref:'office',
        require:true
    }
})

module.exports = mongoose.model('assigment', AssignmentSchema)