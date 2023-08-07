const Patient = require('./../models/Patient')
const Assignment = require('./../models/Assignment')
const Appointment = require("./../models/Appointment")
module.exports = {
    index : async (req,res) =>{

        try{
            const data = await Appointment.find({}).populate('patient').populate('assigment').populate({path:'assigment',populate:{
                path:'idOffice'
            }}).populate({path:'assigment',populate:{
                path:'documentDoctorId'
            }}).exec()

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    findById : async (req,res) => {
        const {id} = req.params
        try {
            const data = await Appointment.findById(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(503).json({"state":false, "error":error})
        }
    },
    save : async (req,res) =>{
        const {idAssigment} = req.params
        const {idPatient} = req.params
        try {
            const appointment = new Appointment(req.body)
            appointment.patient = idPatient
            appointment.assigment = idAssigment

            const data = await appointment.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    },
    erase : async (req,res) =>{
        const {id} = req.params
        try {
            const data = await Appointment.findByIdAndDelete(id)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    }

}