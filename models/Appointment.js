const mongoose = require('mongoose')

const {Schema} = mongoose

const AppointmentSchema = new Schema({
    date: {
        type : Date,
        require : true
    },
    patient : 
    {
        type : Schema.Types.ObjectId,
        ref : 'patient'
    },
    assigment : {
            type : Schema.Types.ObjectId,
            ref : 'assigment'
    }
    
})

module.exports = mongoose.model('appointment', AppointmentSchema)