const Assignment = require('./../models/Assignment')
const Doctor = require('./../models/Doctor')
const Office = require('./../models/Office')
module.exports = {
    index : async (req,res) =>{
        try{
            const data = await Assignment.find({}).populate('documentDoctorId')

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    findByID : async(req,res)=>{
        const {id} = req.params
        try {
            const author = await Assignment.findById(id)

            return res.status(200).json({"state":true,"data":author})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
        
    },
    save : async(req,res)=>{
        const {id_doctor} = req.params
        const {id_office} = req.params
        console.log(id_doctor)
        console.log(id_office)
        try {
            const assignment = new Assignment(req.body)
            assignment.documentDoctorId = id_doctor

            const office = await Office.findById(id_office)
            const flag = false
            office.assignments.find(n=>{
                if( n.date == assignment.date && n.inicio == assignment.inicio && n.fin == assignment.fin){
                    flag = true
                }
            })
            if(!flag){
                office.assignments.push(assignment)

                await office.save()
    
                const data = await assignment.save()
    
                return res.status(200).json({"state":true, "data":data})
            }else{
                return res.status(500).json({"state":false, "data":"Ya existe una reservación"})
            }


            
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    update : async(req,res)=>{
        const {id} = req.params

        const assignment = req.body

        try {
            const data = await Assignment.findByIdAndUpdate(id, assignment)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    erase : async(req,res)=>{
        const {id} = req.params

        try {
            const data = await Assignment.findByIdAndDelete(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"data":error})
        }

    }
}