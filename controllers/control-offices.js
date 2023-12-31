const Office = require('./../models/Office')
const Doctor = require('./../models/Doctor')
module.exports = {
    index : async (req,res) =>{

        try{
            const data = await Office.find({}).populate('assignments').populate({path:'assignments',populate:{
                path:'documentDoctorId'
            }}).populate({path:'assignments',populate:{
                path:'idOffice'
            }})

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    findById : async (req,res) => {
        const {id} = req.params
        try {
            const data = await Office.findById(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(503).json({"state":false, "error":error})
        }
    },
    save : async (req,res) =>{
        try {
            const office = new Office(req.body)

            await office.save()

            const data = await office.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    },

}