const Patient = require('./../models/Patient')
module.exports = {
    index : async (req,res) =>{

        try{
            const data = await Patient.find({}).populate('appointments')

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    findById : async (req,res) => {
        const {id} = req.params
        try {
            const data = await Patient.findById(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(503).json({"state":false, "error":error})
        }
    },
    save : async (req,res) =>{
        try {
            const patient = new Patient(req.body)

            const data = await patient.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    },
    erase : async (req,res) =>{
        const {id} = req.params
        try {
            const data = await Patient.findByIdAndDelete(id)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    }

}