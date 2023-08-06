const mongoose = require('mongoose')

const {Schema} = mongoose

const PatientSchema = new Schema({
    documentId :{
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    birthday : {
        type : Date,
        require : true
    },
    appointments : [
        {
            type : Schema.Types.ObjectId,
            ref : 'appointment'
        }
    ]
})

module.exports = mongoose.model('patient', PatientSchema)