const route = require('express').Router()

const {
    index,
    save,
    findById,
    erase
} = require('../controllers/control-appointments')

route.get('/',index)
route.post('/:idPatient&:idAssigment',save)
route.get('/:id',findById)
route.delete('/:id',erase)


module.exports = route;
